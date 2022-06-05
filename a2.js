/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aiswarya Francie Challat  Student ID: 134229210   Date: 05/06/2022
*
********************************************************************************/ 

var clgdata = require('./modules/collegeData.js')
clgdata.initialize().then(data =>{
    clgdata.getAllstudents().then(data =>{
        console.log(`Successfully retrieved ${data.length} students`)
    }).catch(error=>{
        console.log(`Error ${error}`)
    })
    clgdata.getCourses().then(data =>{
        console.log(`uccessfully retrieved ${data.length} courses`)

    }).catch(error=>{
        console.log(`Error ${error}`)
    })
    clgdata.getTAs().then(data =>{
        console.log(`uccessfully retrieved ${data.length} TAs`)
    }).catch(error=>{
        console.log(`Error ${error}`)  
    })   
}).catch(error => {
    console.log(`Error ${error}`)
})