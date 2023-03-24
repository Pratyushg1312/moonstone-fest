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
    pdfDoc.fontSize(22).font('Times-Bold')
    .text('MEDI-CAPS UNIVERSITY', 170, 57)
    let moved=50;
    pdfDoc.fontSize(20)
    .text('MOONSTONE-2k23', 200, 87)
    pdfDoc.fontSize(17)
    .text('REGISTRATION-INVOICE', 185, 115,{underline:true})

    pdfDoc.image('Passfolder/medicaps.png', 57, 45, { width: 100 })
    pdfDoc.fontSize(14)
    .text(`Invoice No.: ${props.reg_id}`, 50, 100+moved)
    pdfDoc.fontSize(14)
    .text(`Date of Reg: ${props.date_of_registration}`, 370, 100+moved)

    pdfDoc.fontSize(14)
    .text(`Event Name: ${props.event}`, 50, 130+moved)
    pdfDoc.fontSize(14)
    .text(`Date of Event: ${props.date_of_event}`, 370, 130+moved)

    pdfDoc.fontSize(14)
    .text(`Name: ${props.name}`, 50, 160+moved)
    // pdfDoc.fontSize(14)
    // .text('Date of Reg', 400, 160)
// reg_id,name,email,event,phoneno,college,date_of_event:eventstatus.date_of_event,fees:eventstatus.fees
    pdfDoc.fontSize(14)
    .text(`Mobile No.: ${props.phoneno}`, 50, 190+moved)
    pdfDoc.fontSize(14)
    .text(`Amount: Rs ${props.fees}/-`, 370, 190+moved)

    pdfDoc.fontSize(14)
    .text(`University/College Name: ${props.college}`, 50, 220+moved)
    pdfDoc.fontSize(14)
    .text('(Pending)', 390, 210+moved)

    pdfDoc.fontSize(18)
    .text('Note :-', 50, 320)

    pdfDoc.fontSize(14)
    .text('* This are lines which are included in Note', 50, 350)

    pdfDoc.fontSize(14)
    .text('* This are lines which are included in Note', 50, 375)


    pdfDoc.end();

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
      subject: `Invoice For MOONSTONE | Software Cell Medicaps`,
      text:
    `Dear ${props.name},
Your Registration is under process
Your invoice for registration is attached.
Please Make Payment at the Registration Desk to confirm it.

Thanks & Regards
Software cell
    `,
    attachments: [
      {   
        path: 'Passfolder/Invoice.pdf',
      },
    ]
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

// createandsendpass({reg_id:"24",name:"Vishal Sharma",email:"sharma39vishal@gmail.com",event:"Symphony",phoneno:"7546132456",college:"Medi-Caps University",date_of_event:"2023-03-24",fees:"200",date_of_registration:"2023-03-23"});
         


const increaseregistration=async (props)=>{
    // console.log(props.eventstatus)
    if(props.eventstatus.event_category==="cultural"){
        let cntstatus=await Count.findOneAndUpdate({_id:props.oldcnt[0]._id},{registration:props.oldcnt[0].registration+1,cultural_registration:props.oldcnt[0].cultural_registration+1});
    }
    else if(props.eventstatus.event_category==="sports"){
        let cntstatus=await Count.findOneAndUpdate({_id:props.oldcnt[0]._id},{registration:props.oldcnt[0].registration+1,sports_registration:props.oldcnt[0].sports_registration+1});    
    }
    else if(props.eventstatus.event_category==="techno"){
        let cntstatus=await Count.findOneAndUpdate({_id:props.oldcnt[0]._id},{registration:props.oldcnt[0].registration+1,techno_registration:props.oldcnt[0].techno_registration+1});    
    }
    else if(props.eventstatus.event_category==="night"){
        let cntstatus=await Count.findOneAndUpdate({_id:props.oldcnt[0]._id},{registration:props.oldcnt[0].registration+1,nights_registration:props.oldcnt[0].nights_registration+1});    
    }
}

router.post("/registeruser", async (req, res) => {
    try {
        const {name, auth_name,phoneno,email,auth_email,gender,enrollment_no,event, college,team,team_name} =req.body;

        // console.log("REGISTRATION : ", req.body)

        if(!name||!auth_name||!auth_email||!phoneno||!email||!event||!college){
            res.status(400).json("Error: Invalid Input");
        }
        else{
        let eventstatus = await Event.findOne({event});
        const oldcnt= await Count.find();
        //increase Registration count
        increaseregistration({oldcnt,eventstatus,event});        

        //check size of team
        // console.log(team.length,eventstatus.min_team_size,eventstatus.max_team_size)
        if(team.length+1 < eventstatus.min_team_size||team.length+1 > eventstatus.max_team_size){
            res.status(400).send("Error : Filled Member is more than team size");
        }
        else if(eventstatus.status==="open"){
            const reg_id=oldcnt[0].registration+1;
            const receipt_id="ReceiptID";
            const newRegistration = new Registration({reg_id,receipt_id,name,auth_name,phoneno,email,auth_email,gender,event_category:eventstatus.event_category,team_name,enrollment_no,event,college,participant_status:"Not Participated",date_of_registration:new Date(),payment_status:"Pending",fees:eventstatus.fees,team});
            const todaysdate=new Date();
            const date_of_registration=todaysdate.getDate()+"/"+todaysdate.getMonth()+"/"+todaysdate.getUTCFullYear();
            //send mail
            
            createandsendpass({reg_id,name,email,event,phoneno,college,date_of_event:eventstatus.date_of_event,fees:eventstatus.fees,date_of_registration});
            console.log("Mail sended successfuly")
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