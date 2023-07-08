const express=require('express');
const app=express();
const path=require('path');
const empCollection=require('./model/model')
const mongoose=require('mongoose');

//adding



const template_path=path.join(__dirname,'../template/views')
app.set('view engine','hbs');
app.set('views',template_path);

require('./db/db');
let port=3000;

// app.get('/',(req,res)=>{
//     res.send('hello world');
// })
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/empdata', async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const empData = new empCollection({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        cpassword: req.body.confirmpassword
      });
      const postData = await empData.save();
     // res.send(postData);
      res.redirect('/');
    } else {
      res.send('Passwords do not match');
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});
