const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");
var nodemailer = require('nodemailer');

const mailtouser=(props)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info.xtrimcoder@gmail.com',
            pass: 'xftqqyoquxloqkkl'
        }
    });


    var mailOptions = {
        from: 'info.xtrimcoder@gmail.com',
        to:  props.email,
        subject: `Registration For ${props.event} Event | Software Cell Medicaps`,
        text:
`Dear ${props.name},
Your Registration will be confirm after checking Transaction
Your Registration id : ${props.reg_id}
After confirmation Pass was sended on this Email.

Thanks & Regards
Software cell
`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            // console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            // return res.json('Email sent: ' + info.response);
        }
    });
}

const increaseregistration=async (props)=>{
    let cntstatus=await Count.findOneAndUpdate({_id:props.oldcnt[0]._id},{user:props.oldcnt[0].user,registration:props.oldcnt[0].registration+1,});
}

router.post("/registeruser", async (req, res) => {
    try {
        const {name, auth_name,phoneno,email,auth_email,gender,enrollment_no,event, college,team,team_name,} =req.body;

        // console.log("REGISTRATION : ",req.body)

        if(!name||!auth_name||!auth_email||!phoneno||!email||!event||!college){
            res.status(400).json("Error: Invalid Input");
        }
        else{
        let eventstatus = await Event.findOne({event});
        const oldcnt= await Count.find();
        //increase Registration count
        increaseregistration({oldcnt,eventstatus,event});        
        // let cntstatus=await Count.findOneAndUpdate({_id:oldcnt[0]._id},{user:oldcnt[0].user,registration:oldcnt[0].registration+1,});

        //check size of team
        if(eventstatus.status==="open"){
            const reg_id=oldcnt[0].registration+1;
            const challan_id="ChalanID";
            const receipt_id="ReceiptID";
            const newRegistration = new Registration({reg_id,challan_id,receipt_id,name,auth_name,phoneno,email,auth_email,gender,event_category:eventstatus.event_category,team_name,enrollment_no,event,college,participant_status:"Not Participated",date_of_registration:new Date(),payment_status:"Pending",fees:eventstatus.fees});

            //send mail
            mailtouser({reg_id,name,email,event});
            
            //save registration
            newRegistration.save()
                .then(() => res.json(reg_id))
                .catch((err) => res.status(400).json("Error: " + err));            
        }
        else{
            res.status(400).send("Event Was closed");
        }
        }
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/allevent", async (req, res) => {
    try {
        Event.find()
        .then((event) => res.send(event))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});


module.exports = router;