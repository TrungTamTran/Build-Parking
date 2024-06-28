const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const qrcode = require('qrcode');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'ntrieu1890@gmail.com',
    pass: 'eteqefpzxtxmeyaj'
  }
});



// Function to send email with attachment
function sendEmailWithAttachment(email, qrCodeData, pin) {
  // Construct the email options
  const mailOptions = {
    from: 'ntrieu1890@gmail.com',
    to: email,
    subject: 'Your QR Code',
    text: 'Here\'s your QR code data:'+pin,
    attachments: [
      {
        filename: 'qr-code.png',
        content: qrCodeData.split(';base64,').pop(),
        encoding: 'base64'
      }
    ]
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

app.post('/send-email', async (req, res) => {
  const { email, pin, qrCodeData } = req.body;

  try {
    // Send email with QR code attachment
    sendEmailWithAttachment(email, qrCodeData, pin);

    res.send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


