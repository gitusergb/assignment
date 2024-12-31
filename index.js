
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(cors());



let url='https://www.w3.org/Provider/Style/dummy.html';

const PORT = process.env.PORT || 5000;
const fetchData = async(url,time=1000)=>{
    
    setTimeOut(()=>{
        console.log("urldata runing");

    },2000)


}
fetchData();

// Start Server
app.listen(PORT, () => {console.log(`Backend server running on port ${PORT}`);
console.log(`Server is running at http://localhost:${PORT}`);
});
