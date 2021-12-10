const mongoose=require("mongoose");
const UserData=require("../../models/user");
const crypto= require("crypto"); 
const tokenGen=require("./tokengenerator");

module.exports=async (req, res)=>{
    let userid=req.body.userid ;
    let password=crypto.createHash('md5').update(req.body.password).digest('hex');
    let org=req.body.org ;
    let orgtype=req.body.orgtype ;
    let x=await UserData.findOne({userid:userid});
    
    if(x===null){
        res.json({
            statuscode:"invalid user credentials"
        });
        return;
    }
    
    let tokenval=tokenGen();

    await UserData.updateMany({userid:userid},{$set: {authtoken:tokenval}})
    res.json({
        status:"200",
        tokenval:tokenval
    });
    return;
}