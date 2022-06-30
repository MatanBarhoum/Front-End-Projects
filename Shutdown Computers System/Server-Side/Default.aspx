<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="WebApplication3.Default" %>
<%@ Import Namespace="WebApplication3" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script>
        $(function () {
            $("#datepicker").datepicker({ dateFormat: 'yy' });
        });

        function redirect() {
            location.href = '#iden';
        }
    </script>
    <style type="text/css">
        @import url(https://fonts.googleapis.com/earlyaccess/opensanshebrew.css);
        .MatanFirstBlock {
            text-align: center;
            font-size: 24px;
            height: 397px;
        }
        .MatanFirstBlock p {
            margin-top: -35px;
        }
        Buttons {
            width: auto;
            height: auto;
            border: 2px solid black;
            border-radius: 7px;
        }
        #Button1, #Button2 {
                width: 100px;
                font-size: 24px;
                border: 1px solid none;
                border-radius: 5px;
                background-image: linear-gradient(to right, #141e30, #243b55);
                color: white;
        }
        .Select2 {
            margin-right: 10px;
        }
        .newStyle1 {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            background-image: linear-gradient(to right, #141e30, #243b55);
            font-size: 72px;
            font-weight: 800;
            border: 1px solid none;
            border-radius: 7px;
            color: white;
        }

        .ReportBlock {
            width: 500px;
            height: 200px;
            border: 2px solid none;
            border-radius: 15px;
            margin-left: auto;
            margin-right: auto;
        }

        #Select1, #Select2 {
                font-size: 24px;
        }
        
        .blank {
            height: 100px;

        }

        .border {
            width: 550px;
            height: 420px;
            border: 1px solid black;
            border-radius: 10px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 10px;
            font-family: 'Open Sans Hebrew', serif;
            font-size: 18px;
        }

        .divider {
            margin: 0.5rem 0px;
            border-bottom: 2px solid black;
        }

        .bold {
            font-weight: bold;
        }
    </style>
    <script runat="server">

        public string Month { get; set; }
        void Button_Click (Object sender, EventArgs e)
        {
                    Label2.Visible = true;
                    Label3.Visible = true;
                    Label4.Visible = true;
                    Label5.Visible = true;
                    Button2.Visible = true;
            DBEngine Matan = new DBEngine();

            switch (Select1.Value)
            {
                case "ינואר":
                    {
                        Month = "1";
                        break;
                    }
                case "פברואר":
                    {
                        Month = "2";
                        break;
                    }
                case "מרץ":
                    {
                        Month = "3";
                        break;
                    }
                case "אפריל":
                    {
                        Month = "4";
                        break;
                    }
                case "מאי":
                    {
                        Month = "5";
                        break;
                    }
                case "יוני":
                    {
                        Month = "6";
                        break;
                    }
                case "יולי":
                    {
                        Month = "7";
                        break;
                    }
                case "אוגוסט":
                    {
                        Month = "8";
                        break;
                    }
                case "ספטמבר":
                    {
                        Month = "9";
                        break;
                    }
                case "אוקטובר":
                    {
                        Month = "10";
                        break;
                    }
                case "נובמבר":
                    {
                        Month = "11";
                        break;
                    }
                case "דצמבר":
                    {
                        Month = "12";
                        break;
                    }
                default: { return; }

            }

            Matan.TotalHours(Month);
            var Kesef = 0.5249;
            Label2.Text = String.Format("סהכ שעות שמחשבים עבדו: {0} שעות", Convert.ToString(Math.Round((Matan.totalHours), 2)));
            var CostSpent = Matan.totalHours * 0.1;
            Label5.Text = String.Format("סהכ לתשלום עבור צריכה: {0} שקלים<br>בחישוב של שעות פעילות * 0.1 (100 וואט) כפול תשלום עבור קוט'ש (52 אגורות שהם 0.5249)", Math.Round((CostSpent * Kesef), 2) );
            Label3.Text = String.Format("סהכ שעות שנחסכו: {0} שעות", Math.Round(Matan.SavedTime, 2));
            var CostSaved = Matan.SavedTime * 0.1; // 1KWH = 1.0 so 100W = 0.10 or 0.1
            Label4.Text = String.Format("סהכ כסף שנחסך החודש: {0} שקלים<br>בחישוב של שעות חסכון * 0.1 (100 וואט) כפול תשלום עבור קוט'ש (52 אגורות שהם 0.5249)", Math.Round((CostSaved * Kesef), 2) );

            PDFGenerator GeneratePDF = new PDFGenerator();
            GeneratePDF.GeneratePDF(Convert.ToString(Matan.totalHours), CostSpent * Kesef);
        }

        public void Reset_Click(object sender, EventArgs e)
        {
                    Label2.Visible = false;
                    Label3.Visible = false;
                    Label4.Visible = false;
                    Label5.Visible = false;
                    Button2.Visible = false;
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="MatanFirstBlock">
            <asp:Image ID="Image2" runat="server" ImageUrl="~/Images/3.png" />

            <br />
            <span class="newStyle1"">הפקת דוחות חיסכון בחשמל</span><br />
            <br />
            <br />
            <br />
            <p>נוצר ע"י מתן ברהום</p>
            <br />
            <asp:Image ID="Image1" runat="server" ImageUrl="~/Images/analytics.png" Height="146px" Width="156px" />
            <br />
            <br />
            <div class="ReportBlock">
                <br />
        <input class="Select2" id="Select2" type="number" runat="server" min="1900" max="2099" step="1" value="2022" />


            <select id="Select1" name="MonthSelect" runat="server" required="required">
                <option>בחר חודש</option>
                <option>ינואר</option>
                <option>פברואר</option>
                <option>מרץ</option>
                <option>אפריל</option>
                <option>מאי</option>
                <option>יוני</option>
                <option>יולי</option>
                <option>אוגוסט</option>
                <option>ספטמבר</option>
                <option>נובמבר</option>
                <option>דצמבר</option>
            </select><br />
            <br />
           <button id="Button1" onserverclick="Button_Click" value="123" runat="server" onclientclick='redirect()' >הפק דוח</button>
            &nbsp;<br />
            <br />
                </div>
                <div class="border">
                    <b><font style="color:red;">
                <asp:Label Class="Red" ID="Label2" runat="server" Text="Label"></asp:Label>
                        </b></font>
                <br />
                    <div class="divider"></div>
                    <b><font style="color:red;">
                <asp:Label Class="Red" ID="Label5" runat="server" Text="Label"></asp:Label>
                         </b></font>
                <br />
                    <div class="divider"></div>
                    <b><font style="color:green;">
                <asp:Label Class="Green" ID="Label3" runat="server" Text="Label"></asp:Label>
                        </b></font>
                <br />
                    <div class="divider"></div>
                    <b><font style="color:green;">
                <asp:Label Class="Green" ID="Label4" runat="server" Text="Label"></asp:Label>
                        </b></font>
                <br />
                    <div class="divider"></div>
                <br />
                <button id="Button2" onserverclick="Reset_Click" value="123" runat="server" >איפוס</button>
                <br />
                </div>
                <div id="blank" class="blank">
                </div>
                <br />
              
        </div>
            
        <p>
            &nbsp;</p>         
    </form>
</body>
</html>
