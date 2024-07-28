const http = require("http");
const port= 8081; //this is a local pot number 

http.createServer((req,res)=>{
 res.writeHead(200, {"Content-Type": "text/html"});
 res.write("<h2> Hey server started and u can proceed:-)123456 </h2>");
 res.end();
})
.listen(port,()=>{ //call back function
    console.log(`Nodejs server started running on port ${port}`);
});


// http://localhost:8081