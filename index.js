
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const app = express();
let queue=[];

app.use(bodyParser.json());
app.use(cors())

let url='https://docs.google.com/document/d/12U9wztcENs3ASEC4loluGhsafyv5l5a46_D1uyUzirc/edit?tab=t.0';

const PORT = process.env.PORT || 5000;
const fetchData = async(url,time=1000)=>{
    
    setTimeout(()=>{
        console.log("urldata runing");

    },time)


}

app.get('/fetchEach',(req,res)=>{
    const fetched={
        id:Date.now(),addedAt: new Date()
    }
    fetchData(url,1000);
    queue.push(fetched);
    console.log(`data fetched queue updated ${fetched.id}`);
    res.status(200).send("data fetched queue updated")

})

function queueUpdating(){

    // let interval = 5*60*1000;
    // let total_time=30*60*1000;

    let interval = 15*1000;//15 sec 
   let total_time=3*60*1000;//3 min 

    setInterval(()=>{
        if(queue.length>0){
            const fetched = queue[0];
            const timeDone= Date.now() - fetched.addedAt.getTime();

            if(timeDone >=total_time){
                console.log(`fetched done , Task Completed `);
                queue.shift();
            }else{
                console.log(`Running,the task is still in progress.. ${fetched.id}`)
            }
        }
    },interval)

}
queueUpdating();

// Start Server
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);

});
