const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASSWORD
  }
});

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const emailOptions = {
    from: `"${name}" <${process.env.APP_USER}>`,
    to: process.env.RECIPIENT,
    subject: `Message from ${name}`,
    text: message,
    replyTo: email
  };

  try {
    const info = await transporter.sendMail(emailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (err) {
    console.error('Error sending email:', err);

    res.status(500).json({ message: "Failed to send email" });
  }
};
