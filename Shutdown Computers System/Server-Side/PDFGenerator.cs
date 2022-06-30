using PdfSharp;
using PdfSharp.Drawing;
using PdfSharp.Pdf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using System.IO;

namespace WebApplication3
{
    public class PDFGenerator
    {
        public string OnHours { get; set; }
        public double OnCost { get; set; }
        public string OffHours { get; set; }
        public double OffCost { get; set; }
        public void GeneratePDF(string onhours, double oncost)
        {
            OnHours = onhours;
            OnCost = oncost;
            //OffHours = offhours;
            // OffCost = offcost;
            StringBuilder MatanString = new StringBuilder();
            MatanString.Append(string.Format("Israel Police Report Generator - By Matan Barhoum <br>"));
            MatanString.AppendLine(string.Format("<h1>Total Time Computers been online: {0}</h1> <br> ", OnHours));
            MatanString.AppendLine(string.Format("Total Cost: {0}", OnCost));

            DateTime date = new DateTime();
            date = DateTime.Now;
            
            string MatanDate = string.Format(@"C:\Test\{0}0{1}.pdf", date.Year.ToString(), date.Month.ToString());

            PdfDocument pdf = PdfGenerator.GeneratePdf(MatanString.ToString(), PageSize.A4);
            pdf.Save(MatanDate);
        }
    }
}