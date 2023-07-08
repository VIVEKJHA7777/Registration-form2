const mongoose=require('mongoose');
//const url='mongodb://127.0.0.1:27017/empform'
const username=process.env.USERNAME;
const password=process.env.PASSWORD;
const url=`mongodb+srv://${username}:${password}@cluster0.6eoqhhq.mongodb.net/empform?retryWrites=true&w=majority`;
mongoose.connect(url,{
    useNewUrlParser:true,
   // useCreateIndex:true,
    useUnifiedTopology:true,
   // useFindAndModify:false
}).then(()=>{
    console.log('connect')
})
.catch((error)=>{
    console.log(error);
})