using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using EconomicReports1.Engine;

namespace EconomicReports1
{
    public partial class MainForm : Form
    {
        Random random = new Random();
        public int Month { get; set; }
        public double totalcost { get; set; }
        public double totalsaved { get; set; }

        public double Kesef = 0.5249;
        public double energyCost = 0.1; // 0.1 from 1.0 is like 100kw to 1000kw

        public int index = 0;

        public int linenumber = 0;

        public bool totalExist = false;

        public int indecation = 0;
        public double totalWorkingTime { get; set; }
        public double totalForPayment { get; set; }
        public double totalHoursSaved { get; set; }
        public double totalSavedCost { get; set; }


        public MainForm()
        {
            //var randNumber = random.Next(5000, 7500);
            //Thread m = new Thread(new ThreadStart(StartForm));
           // m.Start();
            //Thread.Sleep(randNumber);
            InitializeComponent();
            //m.Abort();
            
        }

        public void StartForm()
        {
            Application.Run(new SplashScreen());
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            dataGridView1.Columns.Add("LineNumber", "שורה");
            dataGridView1.Columns.Add("Date", "תאריך");
            dataGridView1.Columns.Add("WorkingHours", "שעות עבודה (מחשבים)");
            dataGridView1.Columns.Add("TotalCost", "סך הכל לתשלום");
            dataGridView1.Columns.Add("SavingHours", "שעות שנחסכו");
            dataGridView1.Columns.Add("TotalSavings", "סך הכל חיסכון כספי");
            
        }

        private void kryptonButton2_Click(object sender, EventArgs e)
        {
            if (MonthSelect.Text == "בחר חודש")
            {
                MessageBox.Show("לא נבחר חודש");
            }
            else
            {
                linenumber++;
                MonthSwitch();
                string shekels = "₪";
                DBConnector dbconnector = new DBConnector();
                var Year = Convert.ToInt32(YearSelect.Value.ToString());
                dbconnector.MonthPicker(Month, Year);
                var WholeYear = string.Format("{0}/{1}", Month, Year);
                totalcost = (dbconnector.totalHours * energyCost) * Kesef;
                var TotalcostWithShekel = string.Format("{0} {1}", Math.Round(totalcost, 2), shekels);
                totalsaved = (dbconnector.SavedTime * energyCost) * Kesef;
                var TotalSavedwithShekel = string.Format("{0} {1}", Math.Round(totalsaved, 2), shekels);
                dataGridView1.Rows.Add(linenumber, WholeYear, Math.Round(dbconnector.totalHours, 2), TotalcostWithShekel, Math.Round(dbconnector.SavedTime, 2), TotalSavedwithShekel);
                dataGridView1.Rows[index].Cells[3].Style.ForeColor = Color.Red;
                dataGridView1.Rows[index].Cells[5].Style.ForeColor = Color.Green;
                index++;

                totalWorkingTime += Math.Round(dbconnector.totalHours, 2);
                totalForPayment += Math.Round(totalcost, 2);
                totalHoursSaved += Math.Round(dbconnector.SavedTime, 2);
                totalSavedCost += Math.Round(totalsaved, 2);

                if (totalExist == false)
                {
                    dataGridView1.Rows.Add("סה\"כ", "", totalWorkingTime, totalForPayment, totalHoursSaved, totalSavedCost);
                    totalExist = true;
                    dataGridView1.Rows[index].Cells[3].Style.ForeColor = Color.Red;
                    dataGridView1.Rows[index].Cells[5].Style.ForeColor = Color.Green;
                }


                if (totalExist == true && indecation == 1)
                {

                    dataGridView1.Rows.RemoveAt(index - 1);
                    dataGridView1.Rows.Add("סה\"כ", "", totalWorkingTime, totalForPayment, totalHoursSaved, totalSavedCost);
                    dataGridView1.Rows[index-1].Cells[3].Style.ForeColor = Color.Red;
                    dataGridView1.Rows[index-1].Cells[5].Style.ForeColor = Color.Green;
                    dataGridView1.Rows[index].Cells[3].Style.ForeColor = Color.Red;
                    dataGridView1.Rows[index].Cells[5].Style.ForeColor = Color.Green;
                }

                indecation = 1;

            }

        }

        private void MonthSwitch()
        {
            try
            {
                switch (MonthSelect.SelectedItem.ToString())
                {
                    case "ינואר":
                        Month = 1;
                        break;
                    case "פברואר":
                        Month = 2;
                        break;
                    case "מרץ":
                        Month = 3;
                        break;
                    case "אפריל":
                        Month = 4;
                        break;
                    case "מאי":
                        Month = 5;
                        break;
                    case "יוני":
                        Month = 6;
                        break;
                    case "יולי":
                        Month = 7;
                        break;
                    case "אוגוסט":
                        Month = 8;
                        break;
                    case "ספטמבר":
                        Month = 9;
                        break;
                    case "אוקטובר":
                        Month = 1;
                        break;
                    case "נובמבר":
                        Month = 11;
                        break;
                    case "דצמבר":
                        Month = 12;
                        break;
                    default:
                        Month = 0;
                        break;
                }
            }
            catch (Exception ex) { MessageBox.Show("123"); }
        }

        private void kryptonButton1_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            index = 0;
            linenumber = 0;
            indecation = 0;
            totalExist = false;
            totalWorkingTime = 0;
            totalForPayment = 0;
            totalHoursSaved = 0;
            totalSavedCost = 0;
        }
    }
}
