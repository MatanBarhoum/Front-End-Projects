using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace EconomicReports1.Engine
{
    public class DBConnector
    {
        public static string connection = "Data Source=yourdb;Initial Catalog=ShutdownProject;Integrated Security=True";
        public double SavedTime { get; set; }
        public double totalHours { get; set; }
        public void MonthPicker(int month, int year)
        {
            using (SqlConnection conn = new SqlConnection(connection))
            {
                SqlCommand command =
                new SqlCommand("select TotalHours, TotalSaved from StartUp WHERE Month=@SelectedMonth", conn);
                command.Parameters.AddWithValue("@SelectedMonth", month);
                conn.Open();

                SqlDataReader read = command.ExecuteReader();

                while (read.Read())
                {
                    totalHours += Convert.ToDouble((read["TotalHours"].ToString()));
                    SavedTime += Convert.ToDouble((read["TotalSaved"].ToString()));
                }
                read.Close();
                conn.Close();
            }
        }
    }
}
