const express = require('express')
const app=express()
app.get('/api/mock',(err,res)=>{
    console.log("get")
    res.send({
        code:200,
        message: null,
        data: {name: "foo", age:18}
    })
})
app.listen(8080,()=>{
    console.log('Success');
})