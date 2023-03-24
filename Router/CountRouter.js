const router = require("express").Router();
const Count = require("../Model/CountModel");

router.get("/", async (req, res) => {
    try {
        Count.find()
        .then((cnt) => res.json(cnt))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/userinc", async (req, res) => {
    try {
        const oldcnt= await Count.find();
        // console.log("increase")
        // const newCount = new Count({visitor:0,registration :0,cultural_registration :0,sports_registration :0,Techno_registration :0,nights_registration :0,single_event:[],});
        // newCount.save()
        //     .then(() => res.json("Registration Added!"))
        //     .catch((err) => res.status(400).json("Error: " + err));      
        // console.log(oldcnt[0])
        
        let cntstatus=await Count.findOneAndUpdate({_id:oldcnt[0]._id},{visitor:oldcnt[0].visitor+1,registration:oldcnt[0].registration});
        res.status(200).send(cntstatus);

      } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

module.exports = router;