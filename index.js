const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const users = [
    {id:1,name:"nahid",email:"nahid@gmail.com"},
    {id:2,name:"selim",email:"selim@gmail.com"},
    {id:3,name:"karim",email:"karim@gmail.com"},
    {id:4,name:"akbar",email:"akbar@gmail.com"},
    {id:5,name:"ratul",email:"ratul@gmail.com"},
    {id:6,name:"uzzal",email:"uzzal@gmail.com"},
    {id:7,name:"shahin",email:"shahin@gmail.com"},
]

app.get('/',(req,res)=>{
    res.send("this is express")
});
app.get('/user',(req,res)=>{
    res.send("user page");
});
app.get('/users',(req,res)=>{
    if (req.query.name) {
        const serch = req.query.name;
        const matching = users.filter(user=> user.name.toLowerCase().includes(serch));
        res.send(matching);
    }else{
        res.send(users);
    }
    
})
app.post('/users',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)

})




app.listen(port,()=>{
    console.log("run my express",port);
});



