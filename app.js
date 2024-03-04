//1 require

const express = require('express')
const fs = require('fs');

//2 Declaration

const app = express()
const PORT = '3310'
const v = require('./verif.js');


//4 Middlewares

app.use(express.static('public'));

//5 Routes

app.get('/', v , (req,res)=>{
    fs.readFile('./public/Home.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});
app.get('/Home', v , (req,res)=>{
    fs.readFile('./public/Home.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});
app.get('/Services', v , (req,res)=>{
    fs.readFile('./public/Services.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});

app.get('/Contact', v , (req,res)=>{
    fs.readFile('./public/Contact.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });
});

//3 Server

app.listen(PORT, (err) => 
{err? console.log(err) : console.log(`The server is running on HTTP://localhost:${PORT}`)}
)


