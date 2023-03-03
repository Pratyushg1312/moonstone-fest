const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");

router.post("/registeruser", async (req, res) => {
    try {
        const {name, phoneno, email,date_of_birth, gender,utr,event,college} = req.body;
        let utrstatus=[]
        if(!name||!phoneno||!email||!gender||!event||!college||!utr){
            res.status(400).json("Error: Invalid Input");
        }
        else if(utr==="NA"||utr==="N/A"||utr==="Na"||utr==="na"){
            //nothing to check
        }
        else{
           utrstatus = await User.findOne({utr});            
        }

        if(utrstatus.length!==0){
            res.status(200).send("Already Present");
        }        
        else{
        //increase Registration count
        const oldcnt= await Count.find();
        let cntstatus=await Count.findOneAndUpdate({_id:oldcnt[0]._id},{user:oldcnt[0].user,registration:oldcnt[0].registration+1});
        
        let eventstatus = await Event.findOne({event});
        const newRegistration = new Registration({reg_id:oldcnt[0].registration+1,name, phoneno, email,date_of_birth, gender, event,college,date_added:new Date(),utr,payment_status:"Pending",fees:eventstatus.fees});
        newRegistration .save()
            .then(() => res.json("Registration Added!"))
            .catch((err) => res.status(400).json("Error: " + err));        

        }
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

module.exports = router;