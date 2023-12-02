const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.get('/blogs',(req, res)=>{
    const allBlogs = [{title:"My title", body:'lorem ipsume esit sdfiajsdfoas ', link:'hptts;: '},{title:"My title", body:'lorem ipsume esit sdfiajsdfoas ', link:'hptts;: '},{title:"My title", body:'lorem ipsume esit sdfiajsdfoas ', link:'hptts;: '},{title:"Yash is not boy", body:"its true", link:'no link'}]
    res.send(allBlogs)
})

app.listen(8080, console.log('server is started at port 8080'));