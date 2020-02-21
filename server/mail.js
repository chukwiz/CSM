const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const Welcome = require('./welcome_template');

// const auth = {
//     auth:{
//         api_key:"27b5f13975a9b9c34f06a628f0f52c87-52b6835e-c0f5ab7d",
//         domain:"sandboxb25bd436ea6e4930a0793fb5609be847.mailgun.org"
//         // domain:"https://app.mailgun.com/app/sending/domains/sandboxb25bd436ea6e4930a0793fb5609be847.mailgun.org"
//     }
// }

const auth = {
    host:"in-v3.mailjet.com",
    port:"587",
    secure:false,
    auth:{
        username:"19fc6eb4b53f771061b531e9f533627e",
        password:"5313d5668f6fa0dc4dbe57a7895acfbb"
        // domain:"https://app.mailgun.com/app/sending/domains/sandboxb25bd436ea6e4930a0793fb5609be847.mailgun.org"
    }
}

// const transporter = nodemailer.createTransport(mailGun(auth))
// const welcome = (email,name) => {
//     return `
const transporter = nodemailer.createTransport(auth)
const welcome = (email,name) => {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome</title>
</head>
<body style="margin:0px;padding:5px;font-size:80%">
    <div style = "color:#535353">
        <p>Dear <span style="text-transform:capitalize;">${name},</span></p>
        <p>Welcome to CSM Wealth, a company dedicated to being a distinctive and trusted provider of asset management solutions for individual and institutional investors.
        </p>
        <p>Our goal is to offer clients high-quality, well-performing investment strategies that meet multiple financial needs. To accomplish this, we employ a multi-manager, multi-strategy approach that delivers a broad array of investment strategies from affiliated managers and select subadvisers.
        </p>
        <p>Each of our investment brokers has a distinct investment philosophy and style, with talent and discipline that have been tested through market cycles and validated by performance over time. Importantly, they all share an unwavering commitment to investor success.
        </p>
        <p>On behalf of the entire team at CSM Wealth , I welcome you to learn more about our brokerage company and investment portfolio that make us a company with a singular focus on providing long-term investment solutions. We hope you will consider joining us as a client.
        </p>
    </div>
    <br />
    <div style="text-align:left;color:#1a1a1a">
        William Schmidt <br />
        Director
    </div>
    <br />
    <hr style="1px solid #e9e9e9"/>
    <br />
    <div style="color:#6e6e6e;text-align:center;font-size:80%">
    <p>This email was sent to ${email}. You are receiving this email because you signed up at <a href="http://csmwealth.com">csmwealth.com</a> . We hope that 
    you found this email useful.</p>
    <p>Copyright &copy; 2020 csmwealth, All rights reserved</p>
    <p>1A Windsor Road Northam Bideford Devon EX39 1EN</p>
    </div>
</body>
</html>
    `
}

// const sendMail = (email, name, cb) => {
//     const mailOptions = {
//         from:'Mitchell Colin<chukswiz@gmail.com>',
//         to:email,
//         subject:'Welcome to CSM Wealth',
//         html:welcome(name)
//     }
    
//     transporter.sendMail(mailOptions, function(err,data){
//         if(err){
//             cb(err,null)
//         }
//         else{
//             cb(null,data)
//         }
//     });
// }

const sendMail = (email, name) => {
    const mailOptions = {
        from:'CSM Wealth<support@csmwealth.com>',
        to:email,
        subject:'Welcome to CSM Wealth',
        html:welcome(email,name)
    }
    
    transporter.sendMail(mailOptions);
}


module.exports = sendMail;