const mongoose=require("mongoose");
const UserData=require("../../models/user");
const crypto= require("crypto"); 
const tokenGen=require("./tokengenerator");

module.exports=async (req, res)=>{
    let userid=req.body.userid ;
    let password=crypto.createHash('md5').update(req.body.password).digest('hex');
    let org=req.body.org ;
    let orgtype=req.body.orgtype ;


    console.log(typeof(password));
    let x=await UserData.findOne({userid:userid});
    
    if(x!==null){
        res.json({
            statuscode:"userid already exists"
        });
        return;
    }
    
    let tokenval=tokenGen();
    await new UserData({
        userid:userid,
        password:password,
        org:org,
        orgtype:orgtype,
        tokenval:tokenval
    }).save();

    res.json({
        status:"200",
        tokenval:tokenval
    });
    return;
}