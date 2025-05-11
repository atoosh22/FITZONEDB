const members=require('../models/members.model');
const route=require('express').Router();

// insertion code

route.post('/', async (req,res)=>{
     try{
        const members= new members({
            fullName: req.body.fullName,
            phone: req.body.phone,
            address: req.body.address,
            shift: req.body.shift,
            date: req.body.date,
            gender: req.body.gender,
            paid: req.body.paid

        });

        const saveMember= await members.save();
        res.status(201).json({message:"New Member Has Been Saved", data:saveMember})

     }catch(err){
         res.status(404).json({message:"waxaa jira khalad"})

     }
})
module.exports=route;