const nodemailer = require("nodemailer");
const Contact = require("../Models/Contact");
const dotenv = require("dotenv")

dotenv.config();


exports.sendContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // 1. Save to MongoDB
    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    // 2. Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "📬 New Contact Form Submission - Majisa Solar",
      html: `
        <h3>New Message from Majisa Solar Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><em>Received on ${new Date().toLocaleString()}</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong. Try again." });
  }
};


exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ error: "Failed to fetch contact messages." });
  }
};