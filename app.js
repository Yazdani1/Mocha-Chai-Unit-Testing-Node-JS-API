const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

require("./model/db");


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route

app.use("/api",require("./router/user"));





app.listen(port,(req,res)=>{
    console.log("Server connected");
})
