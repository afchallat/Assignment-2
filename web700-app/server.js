/*********************************************************************************
*  WEB700 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Aiswarya Francie Challat  Student ID:134229210  Date:19th June 2022
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
const res = require("express/lib/response");
const { join } = require("path");
var path = require("path");
var app = express();
var collegeData = require('./modules/collegeData')

app.get("/students", (req, res) => {
    if(Object.keys(req.query).length==0){
        collegeData.getAllstudents().then(success=>{

            res.send(JSON.stringify(success))
        }).catch(error=>{
            res.send(JSON.stringify({message:"No results"}))
        }); 
    }
    else{
        collegeData.getStudentsByCourse(req.query.course).then(success=>{
            res.send(JSON.stringify(success))
        }).catch(error=>{
            res.send(JSON.stringify({message:"No results"}))
        });
    
    }
    
});

app.get("/tas",(req, res) => {
    collegeData.getTAs().then(success=>{
        res.send(JSON.stringify(success))
    }).catch(error=>{
        res.send(JSON.stringify({message:"No results"}))
    })
});      

app.get("/courses",(req, res) => {
    collegeData.getTAs().then(success=>{
        res.send(JSON.stringify(success))
    }).catch(error=>{
        res.send(JSON.stringify({message:"No results"}))
    })
});

app.get("/student/num",(req, res) => {
    collegeData.getTAs().then(success=>{
        res.send(JSON.stringify(success))
    }).catch(error=>{
        res.send(JSON.stringify({message:"No results"}))
    })
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

app.get("/htmlDemo", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/htmlDemo.html"));
});

collegeData.initialize().then(success=>{
app.listen(HTTP_PORT, ()=>{console.log("server listening on port: " + HTTP_PORT)})}).catch(error=>{
    console.log('Failed'+error)
});







