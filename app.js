const express=require("express");
const app=express();
const port= process.env.PORT || 3030;
const bodyParser=require("body-parser");
const mongoose= require("./config/MongooseConnect")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/", require("./controllers/welcomehome"));

app.post("/personal",require("./controllers/AddPersonal"));

app.listen(port, ()=>console.log(`App is running on port ${port}`)); 