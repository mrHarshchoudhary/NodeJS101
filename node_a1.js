const fs = require("fs");
//-------------------Synchrous---------
// q1
// fs.mkdirSync("space_project");


// Q2 Inside the folder, create a file log.txt and add the line "ISRO is planning Gaganyaan mission, 
// ie an Indian crewed orbital spacecraft."

//  fs.writeFileSync("./space_project/log.txt","ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.")

// Q3 Now, replace the line in the log.txt file with "ISRO has started working on Gaganyaan."

//  fs.writeFileSync("./space_project/log.txt","ISRO has started working on Gaganyaan.")

// Q4 Append another line to the log.txt file " The current Aditya-L1 team of scientists is mentoring new 
// talent for working on the Gaganyaan mission."

// fs.appendFileSync("./space_project/log.txt","\nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission")


// Q5 Rename the log.txt file to update.txt

//  fs.renameSync("./space_project/log.txt","./space_project/update.txt")

// Q6 Read the update.txt file and display the data. Additionally print a line "We are excited" using console.log() after the read operation

// let data = fs.readFileSync("./space_project/update.txt","utf-8")
// console.log(`${data}\nWe are excited`)


// / Q7 Delete the file update.txt

//  fs.unlinkSync("./space_project/update.txt")

// Q8 Delete the folder space_project

 fs.rmdirSync("space_project")















//-------------Asynchrous-----------


// q1 folder create
// fs.mkdir("space_project",(err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`folder create Successfully`);

// })

// q2asyn
// let data="ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."
// fs.writeFile("./space_project/log.txt",data,(err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`Successfully create log.txt`);
// }
// )


//q3asyn
// fs.writeFile("./space_project/log.txt","ISRO has started working on Gaganyaan",(err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`successfully overwrote the data in log.txt`);

// })

//q4 append in log.txt
// let data =
//   " \nThe current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";

// fs.appendFile("./space_project/log.txt", data, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`successfully append new line`);
// });

//q5
// fs.rename("./space_project/log.txt","./space_project/update.txt",(err)=>{
//   if(err){
//     throw err
//   }

//   console.log(`Successfully rname file log.txt to update.txt`);
// })
//q6
// let input_path="./space_project/update.txt"
// fs.readFile("./space_project/update.txt",(err,data)=>{
//   if (err) {
//         throw err;
//       }
//   x=data.toString()
//   console.log(`Sucessfully read data from ${input_path}`);
//   console.log("\nWe are excited"+x);
//     })

// q7
// fs.unlink("./space_project/update.txt",(err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`Successfully remove`);
// })

// q8
// fs.rmdir("space_project",(err)=>{
//   if(err){
//     throw err
//   }
//   console.log(`remove folder`);

// })