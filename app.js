const express= require('express');
const path=require('path'); //core module
const bodyParser=require('body-parser');
const cors=require('cors');
const mockResponses = require('./routes/mockResponses');

const app = express();
//port number
const port = process.env.PORT || 3000;
//use middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser 
app.use(bodyParser.json());

app.use('/mockData',mockResponses)

//index  Route
app.get('/',(req,res)=>{
    res.send("Invalid endpoint");
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
//   });
  
//start server
app.listen(port, ()=>{
    console.log("server started on port"+port);
})
