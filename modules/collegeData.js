const fs = require('fs');
const { getAllstudents } = require('../modules/collegeData.js');

class Data{
    constructor(students,courses){
        this.students = students;
        this.courses = courses;
    }

}

var dataCollection = null;
var studentDataFromFile = null;
var courseDataFromFile = null;

module.exports.initialize = function(){

return new Promise(function(resolve,reject){
    const students = new Promise(function(resolve,reject){
    fs.readFile('./data/students.json', 'utf8', function(err, dataFromFile){
        if (err){
            reject("unable to read students.json")
            return;
        }

        studentDataFromFile = JSON.parse(dataFromFile);
        console.log(studentDataFromFile);
        resolve("Operation success")
    });    
});
    const courses = new Promise(function(resolve,reject){
        fs.readFile('./data/courses.json','utf8', function(err,dataFromFile){
        if (err){
            reject("unable to read students.json")
            return;
        }
        courseDataFromFile = JSON.parse(dataFromFile);
        console.log(courseDataFromFile);
        resolve("Opertaion Success")
});
});
students.then(student=>{
    courses.then(course=>{
        dataCollection = new Data(studentDataFromFile, courseDataFromFile);
        resolve('Successfully completed')
    }).catch(error=>{rejec(error)})
}).catch(error=>{reject(error)})
});
}

module.exports.getAllstudents = function()
{
    return new Promise(function(resolve,reject){
        if(dataCollection.students.length==0)
        {
            reject("no results returned")
        }
        else{
            resolve(dataCollection.students)
        }
    });
}

module.exports.getTAs =function()
{
    var student = []
    return new Promise(function(resolve,m,reject){
        for(var i=0;i<dataCollection.students.length;i++){
            if(dataCollection.students[i].TA)
            {
                student.push(dataCollection.students[i].TA)
            }
        }
        if(student.length == 0){
            reject("no results returned")
        }
        else{
            resolve(student)
        }
    });
}

module.exports.getCourses = function()
{
    return new Promise(function(resolve,reject){
        if(dataCollection.courses.length==0)
        {
            reject("no results returned")
        }else{
            resolve(dataCollection.courses)
        }
    });
}