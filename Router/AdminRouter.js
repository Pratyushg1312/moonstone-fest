const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");

router.get("/allregistration", async (req, res) => {
    try {
        Registration.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/paymentcompleted/:id", async (req, res) => {
    const Id= req.params.id;
    try {
        let registrationStatus=await Registration.findOneAndUpdate({_id:Id},{payment_status:"Complete"});
        res.status(200).send(registrationStatus);
        } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/paymentfailed/:id", async (req, res) => {
    const Id= req.params.id;
    try {
        let registrationStatus=await Registration.findOneAndUpdate({_id:Id},{payment_status:"Failed"});
        res.status(200).send(registrationStatus);
        } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.post("/addevent/", async (req, res) => {
    try {
        const {event,fees,status}=req.body;
        const newEvent = new Event({event,fees,status});
        newEvent .save()
            .then(() => res.json("Event Added!"))
            .catch((err) => res.status(400).json("Error: " + err));  
      } catch (err) {
        console.error(err);
        res.status(200).send("Successfully Registered");
      }
});

router.post("/changeeventstatus/:id", async (req, res) => {
    const Id= req.params.id;
    try {
        const {status}=req.body;
        let eventStatus=await Event.findOneAndUpdate({_id:Id},{status});
        res.status(200).send(eventStatus);
      } catch (err) {
        console.error(err);
        res.status(200).send(err);
      }
});

module.exports = router;