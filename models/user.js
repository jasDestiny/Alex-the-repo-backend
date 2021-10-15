const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    userid:{
        type:String,
        required: [true, 'userid is required']
    },
    password:{
        type:String,
        required: [true, 'password is required']
    },
    org:{
        type:String,
        required: [true, 'org is required']
    },
    orgtype:{
        type:String,
        required: [true, 'orgtype is required']
    },
    tokenval:{
        type:String,
        required: [true, 'tokenval is not mandatory']
    }
});

module.exports= mongoose.model("UserData", UserSchema, "UserData");