let day = new Date().getDay();
let hours = new Date().getHours();

const fs= require ('fs');

console.log(day);
console.log(hours);

function verif(req,res, next){

    if (day>0 && day<6 && hours>9 && hours<18)
        { next();}
    else 
        fs.readFile('./public/Error.html','utf8',(err,data)=>{
        err?res.end('File not found')&& console.error(err):
        res.end(data);
    });

}

module.exports = verif;