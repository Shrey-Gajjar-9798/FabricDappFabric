var express = require('express')
var invoke = require('./invoke')
const { Gateway, Wallets } = require('fabric-network');
var app = express()
var register = require('./registerUser');
var registeruser = require('./geteregisterUser');
var cors = require('cors');
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send("hello we are trying to connect fabric using web services")
})

app.post('/invoke',(req,res)=>{
    var key = req.body.key;
    var value = req.body.value; 
    //var key= req.body['key'];
    //var value = req.body['value'];
    invoke.sendData(key,value);
    res.set('Access-Control-Allow-Origin', '*');
    res.json({"status": "transaction done successfull"});
    console.log(key,value)
})

app.post('/method', (req,res)=>{
    var first = req.body['first']
    var second = req.body['second']

    res.json({"answer" : "nice"})
    console.log(first,second)
})

app.get('getdata',(req,res)=>{
    
})

app.post('/registeruser',(req,res)=>{
    register.registerUser()
    res.json({"status" : "user register successfully"})
})

app.post('/rbyname',(req,res) =>{
    var username = req.body['username'];
    registeruser.RegisterUser(username);
    res.json({"status":"done successfully"})
})


app.listen(9798,()=>{
  console.log("we are at 9798 port test")
})