using System;
using System.Net;
using System.Net.Mail;

public partial class ContactForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            // Retrieve form data
            string name = Request.Form["name"];
            string email = Request.Form["email"];
            string subject = Request.Form["subject"];
            string message = Request.Form["message"];

            // Send the email
            SendEmail("nknitish043@gmail.com", email, subject, BuildEmailBody(name, email, message));
        }
    }

    private void SendEmail(string toEmail, string fromEmail, string subject, string body)
    {
        string smtpServer = "smtp.gmail.com";
        int smtpPort = 587;
        string smtpUser = "nknitish043@gmail.com"; // Your Gmail email
        string smtpPass = "ibcx ozmp dytt iock";   // Your Gmail app password

        try
        {
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(fromEmail);
            mail.To.Add(toEmail);
            mail.Subject = subject;
            mail.Body = body;
            mail.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient(smtpServer, smtpPort)
            {
                Credentials = new NetworkCredential(smtpUser, smtpPass),
                EnableSsl = true
            };

            smtp.Send(mail);
            Response.Write("<script>alert('Email sent successfully!');</script>");
        }
        catch (Exception ex)
        {
            Response.Write($"<script>alert('Error: {ex.Message}');</script>");
        }
    }

    private string BuildEmailBody(string name, string email, string message)
    {
        return $"<h1>Contact Form Submission</h1>" +
               $"<p><strong>Name:</strong> {name}</p>" +
               $"<p><strong>Email:</strong> {email}</p>" +
               $"<p><strong>Message:</strong></p><p>{message}</p>";
    }
}
