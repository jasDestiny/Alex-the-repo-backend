const mongoose=require("mongoose");
const project = require('../../models/schema');

module.exports= async (projectname)=> {
    const connector = mongoose.connect("mongodb+srv://ProjectDB:jasjsr1968@cluster0.pjhtk.mongodb.net/ProjectList?retryWrites=true&w=majority");
    var x=await project.findOne({ projectname:projectname });
    console.log(x);
    mongoose.connection.close();

    
    return 0
};
