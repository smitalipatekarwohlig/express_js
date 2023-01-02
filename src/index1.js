const path = require("path");
const express = require('express');
const app =express();
const hbs = require("hbs");
const port = 8000;

//Built-in Middleware
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

//to use template engine 1st we have to set that engine
//To set th view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

//Template engine route
//enables to use static template files in your application
app.get("",(req,res)=>{
    res.render("index");
});

// app.use(express.static(staticPath));

app.get("/about",(req,res)=>{
    res.render("about");
});
 
app.get("/about/*",(req,res)=>{
    req.render("404",{
        errorcomment :"Oops this abouteus page couldn't be found."
    });
});

app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment: "Oops, Page couldn't be found."
    });
});

app.listen(port,()=>{
    console.log(`Listening to the port no ${port}`);
});