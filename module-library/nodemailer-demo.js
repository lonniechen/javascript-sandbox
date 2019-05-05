// install the nodemailer module
// npm install nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: `gmail`,
    host: `smtp.gmail.com`,
    secure: true,
    port: 465,
    auth: {
        user: `lonniechen1024@gmail.com`, //account name
        pass: 'XXXXXXX'                   //password
    }
})

const mailOptions = {
    from: 'lonniechen1024@gmail.com', // sender address
    to: 'lonniechen1024@gmail.com', // list of receivers
    subject: 'this is a test mail', // Subject line
    html: `
    Hi,<br><br>

    This is a test mail.<br><br>

    Regards,<br>
    CL
    `// plain text body
};

const sendMyMail = (option) => {
    transporter.sendMail(option, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    })
}

sendMyMail(mailOptions);