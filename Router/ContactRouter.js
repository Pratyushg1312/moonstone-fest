const router = require("express").Router();
var nodemailer = require('nodemailer');

router.post("/", async (req, res) => {
    try {
        // console.log("sdfskjfhs")
        const { name, phoneno, email, message } = req.body;
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'info.xtrimcoder@gmail.com',
                    pass: 'xftqqyoquxloqkkl'
                }
            });


            var mailOptions = {
                from: 'info.xtrimcoder@gmail.com',
                to:  ['sharma39vishal@gmail.com',"nehanshuajmera@gmail.com","pankajmalik1979@gmail.com"],
                subject: "Moonstone Contact Us Message",
                text:
                    `Name: ${name}
Phone Number: ${phoneno}
Email : ${email}
Message : ${message}
    `,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    res.json("4512");
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    return res.json('Email sent: ' + info.response);
                }
            });
        
    }
        catch (err) {
            console.error(err);
            res.status(500).send("Login Succesfull");
        }
    })
module.exports = router;