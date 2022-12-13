const { request } = require("express");
const express = require("express");
const app =express();
const port =3000;

app.get("/",(req,res)=>{
    res.write("<h1> Welcome to the Home Page </h1>");
     res.write("<h1> Welcome to the Again Home Page </h1>");
     res.send();
});
app.get("/about",(req,res)=>{
    res.send("Welcome to the ABoutUs Page");
});
app.get("/contact",(req,res)=>{
     res.send("Welcome to the ContactUs Page");
});
app.get("/temp",(req,res)=>{
    res.send([{
        id:1,
        name:"Smitali"
    },
    {
        id:1,
        name:"Smitali"
    },
    {
        id:1,
        name:"Smitali"
    },
    {
        id:1,
        name:"Smitali"
    }
]);
});

app.listen(port,()=>{
    console.log(`Listening to the Port no ${port}`);
});

// The methods are identical when an object or an array is passed, but res.json() will also converts non-objects, such as null and undefined, which are not valid JSON
// res.send() --> sends the data and end the request
// res.json() --> send the data in JSON format and end the request 