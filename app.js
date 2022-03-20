
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes');
const app=express();
const { render } = require('express/lib/response');
const dbURI="mongodb+srv://newuser:nishi@nodetuts.th2qn.mongodb.net/nodetuts";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));
//register view engine
app.set('view engine','ejs');
//listen for requests
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
/*
app.get('/add-blog',(req,res)=>
{
    const blog=new Blog({
        title:'new blog',
        snippet:'about my new blog',
        body:'more about my new blog'
    });
    blog.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});
app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});
app.get('/single-blog',(req,res)=>{
    Blog.findById('623610cca419974b5ca38189')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});
*/
app.get('/',(req,res)=>{
   res.redirect('/blogs');
});
app.get('/about',(req,res)=>{

    res.render('about',{title:"About"});
});
//blog routes
app.use('/blogs',blogRoutes);
app.use((req,res)=>{
    res.status(404).render('404',{title:404});
})