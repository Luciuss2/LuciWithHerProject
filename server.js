const { deepStrictEqual } = require("assert");
const http = require("http");
const port= 8081; //this is a local pot number

//HTTP Methods
//GET: inorder to get certain data from server we use this method
//POST: Sending or transfering data to server
//DELETE: deleting the data from the database
//PATCH: updating certain fields
//PUT: full update


const toDoList = ["learn", "apply things", "succed"];


http
.createServer((req,res)=>{//call back function
const {method,url} = req;
// console.log(method, url);


if(url === "/todos"){
if (method === "GET"){
    res.writeHead(200 , {"Content-Type": "text/html"});
    res.write(toDoList.toString());
}
else if(method ==="POST"){
let body = "";
req.
on('error',(err)=>{
console.log(err);
})
.on('data',(chunk)=>{
body += chunk;
// console.log(chunk);
})
.on('end',()=>{
    body =JSON.parse(body);
    let newToDO = toDoList;
    newToDO.push(body.item);
    console.log(newToDO);
    // console.log("data: ", body);
});
}else if(method ==="DELETE"){
    let body = '';
    req
    .on('error',(err)=>{
console.log(err);
    })
.on('data',(chunk)=>{
body += chunk;        
    })
    .on('end',()=>{
        body = JSON.parse(body); 
        let deleteThisItem = body.item;
        // for(let i=0; i<toDoList.length; i++){
        //     if(toDoList[i]===deleteThisItem){
        //         toDoList.splice(i,1);
        //         break;
        toDoList.find((elem,index)=>{
            if (elem === deleteThisItem){
            toDoList.splice(index,1);
        }
    });
       
           
            });
        }else {
    res.writeHead(501);
}
} else {
    res.writeHead(404);
}
res.end();
//  res.writeHead(200, {"Content-Type": "text/html"});
//  res.write("<h2> Hey server started and u can proceed:-)123456 </h2>");
//  res.end();
})
.listen(port,()=>{ //call back function
    console.log(`Nodejs server started running on port ${port}`);
});


// http://localhost:8081
// http://localhost:8081/signin
// http://localhost:8081/signup
// http://localhost:8081/home
// http://localhost:8081/comtactUs
// http://localhost:8081/AboutUs 






