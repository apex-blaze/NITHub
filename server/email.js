require("dotenv").config();
const SGmail = require("@sendgrid/mail");

SGmail.setApiKey(process.env.SENDGRID_API_KEY);

function newUserMail(toEmail, data) {
  const message = {
    to: toEmail,
    from: {
      name: "NITHUB",
      email: "nithhub@gmail.com",
    },
    subject: `New Announcement : ${data.type}`,
    html: `<h1>Hello, from NITHub!!</h1>
        <h2>Following are some updates by NITH Administration</h2>
        <h3>${data.title}</h3>
        <h5>${data.description}</h5>
        <i>Do check out NITHub website for complete details!!</i> `,
  };

  SGmail.send(message)
    .then((res) => {
      console.log("Email has been sent...");
    })
    .catch((err) => console.log(err));
}

module.exports = {
  newUserMail,
};
