const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/dist")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/send", (req, res) => {
  let response = res;
  const output = `
    <p>Yout have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name} </li>
      <li>Email: ${req.body.email} </li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</>
  `;

  var mailOptions = {
    from: req.body.name, // sender address
    to: "constainabrams@gmail.com", // list of receivers
    subject: "My site contact from: " + req.body.name, // Subject line
    text: req.body.message, // plain text body
    html: output // html body
  };
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
      user: "constainabrams@gmail.com",
      pass: "icrqkcnxztjlqmpm"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      let responseToFront = {
        error: err,
        message:
          "I apologize, but on the server of the problem, try sending your message later"
      };
      response.send(responseToFront);
    } else {
      let responseToFront = {
        success: JSON.stringify(res),
        message:
          "Thank you, your message has been sent to my mail and soon I will look through it."
      };
      response.send(responseToFront);
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening on port: " + port);
