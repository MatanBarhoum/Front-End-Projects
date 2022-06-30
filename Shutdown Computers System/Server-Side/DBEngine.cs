using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace WebApplication3
{

    public class DBEngine
    {
        public static string connectionString = "Data Source=yourdb;Initial Catalog=ShutdownProject;Integrated Security=True;MultipleActiveResultSets=True";
        public string Month { get; set; }
        public string Year { get; set; }
        public List<string> Years { get; set; }

        public double SavedTime { get; set; }

        public double totalHours { get; set; }

        public void queryYears()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                string cmd = "SELECT Year FROM [Shutdown] WHERE Year='@selectedYear'";
                SqlCommand query = new SqlCommand(cmd, conn);
                query.Parameters.AddWithValue("@selectedYear", Year);
            }
        }

        public void TotalHours(string selectedMonth)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command =
                new SqlCommand("select TotalHours, TotalSaved from StartUp WHERE Month=@SelectedMonth", connection);
                command.Parameters.AddWithValue("@SelectedMonth", selectedMonth);
                connection.Open();

                SqlDataReader read = command.ExecuteReader();

                while (read.Read())
                {
                    totalHours += Convert.ToDouble((read["TotalHours"].ToString())); 
                   // if (Convert.ToDouble(read["TotalHours"].ToString()) > 24)
                   // {
                       SavedTime += Convert.ToDouble((read["TotalSaved"].ToString()));
               //    }
                 //   else { SavedTime += 24 - Convert.ToDouble((read["TotalHours"].ToString())); }
                    
                }
                read.Close();
                connection.Close();

            }
        }
    }


}