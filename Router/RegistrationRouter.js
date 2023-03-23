const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");
var nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');


const createandsendpass=(props)=>{
    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream('Passfolder/Invoice.pdf'));
    pdfDoc.fontSize(30)
    .text('INVOICE', 220, 57)

    pdfDoc.image('Passfolder/medicaps.png', 210, 125, { width: 150 })

    pdfDoc.fontSize(14)
    .text(`Sr No.: ${props.reg_id}`, 50, 100)
    pdfDoc.fontSize(14)
    .text(`Date of Reg: ${props.date_of_registration}`, 400, 100)

    pdfDoc.fontSize(14)
    .text(`Event Name: ${props.event}`, 50, 130)
    pdfDoc.fontSize(14)
    .text(`Date of Event: ${props.date_of_event}`, 400, 130)

    pdfDoc.fontSize(14)
    .text(`Name: ${props.name}`, 50, 160)
    // pdfDoc.fontSize(14)
    // .text('Date of Reg', 400, 160)
// reg_id,name,email,event,phoneno,college,date_of_event:eventstatus.date_of_event,fees:eventstatus.fees
    pdfDoc.fontSize(14)
    .text(`Mobile No.: ${props.phoneno}`, 50, 190)
    pdfDoc.fontSize(14)
    .text(`Amount: ${props.fees}`, 400, 190)

    pdfDoc.fontSize(14)
    .text(`College Name: ${props.college}`, 50, 220)
    pdfDoc.fontSize(14)
    .text('(Pending)', 400, 210)

    // pdfDoc.image('Passfolder/medicaps.png', 50, 45, { width: 50 })
    //         .fillColor('#444444')
    //         .fontSize(20)
    //         .text('Medi-Caps', 110, 57)
    //         .fontSize(10)
    //         .text('A.B. Road, Pigdamber,', 200, 65, { align: 'right' })
    //         .text(' Rau Indore - 453331', 200, 80, { align: 'right' })
    //         .moveDown();
    // pdfDoc.image('Passfolder/logomoon.png', 30, 00, { width: 500 })
    //         .moveDown();
    // pdfDoc.fontSize(20)
    //     .text("This is a pass for Moonstone", 450, 150);
    // pdfDoc
    //     .fillColor('red')
    //     .fontSize(17)
    //     .text("20%", 305, 150);
    pdfDoc.end();

//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//           user: 'info.xtrimcoder@gmail.com',
//           pass: 'xftqqyoquxloqkkl'
//       }
//     });
    
    
//     var mailOptions = {
//       from: 'info.xtrimcoder@gmail.com',
//       to:  props.email,
//       subject: `Invoice For MOONSTONE | Software Cell Medicaps`,
//       text:
//     `Dear ${props.name},
// Your Registration was be confirm 
// Your Registration Invoice in Attachment.
// Please Complete the Payement in Registration desk
// Thanks & Regards
// Software cell
//     `,
//     attachments: [
//       {   
//         path: 'Passfolder/Invoice.pdf',
//       },
//     ]
//     };
    
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//           console.log(error);
//           // console.log(error);
//       } else {
//           console.log('Email sent: ' + info.response);
//           // return res.json('Email sent: ' + info.response);
//       }
//     });
    
    }

    // createandsendpass({reg_id:"243789",name:"Vishal Sharma",email:"sharma39vishal@gmail.com",event:"Event Name"});

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
        // console.log(team.length,eventstatus.min_team_size,eventstatus.max_team_size)
        if(team.length<eventstatus.min_team_size-1||team.length>eventstatus.max_team_size-1){
            res.status(400).send("Error : Filled Member is more than team size");
        }
        else if(eventstatus.status==="open"){
            const reg_id=oldcnt[0].registration+1;
            const receipt_id="ReceiptID";
            const newRegistration = new Registration({reg_id,receipt_id,name,auth_name,phoneno,email,auth_email,gender,event_category:eventstatus.event_category,team_name,enrollment_no,event,college,participant_status:"Not Participated",date_of_registration:new Date(),payment_status:"Pending",fees:eventstatus.fees,team});

            //send mail
            createandsendpass({reg_id,name,email,event,phoneno,college,date_of_event:eventstatus.date_of_event,fees:eventstatus.fees,date_of_registration:new Date()});
            
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