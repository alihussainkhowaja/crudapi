const express=require('express');
const bodyParser=require('body-parser');
const student=require('./routes/student.route');
const app=express();
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost/Student",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conected to Database')
})
.catch(err =>{
    console.log('cannot connect to the Database', err);
    process.exit();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/students', student);
app.listen(3000, ()=>{
    console.log('server is running fine')
});
