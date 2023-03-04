const express = require('express')
const app = express()
app.get('/api/chargers', (err, res) => {
    console.log("get")
    res.send({
        code: 200,
        message: null,
        data: {
            chargers: [{
                location: "北京",
                detailLocation: "北京市海淀区西城15道",
                price: "0.1",
                availableTime: "00:00-10:00",
                distance: "10.5"
            }, {
                location: "北京",
                detailLocation: "北京市海淀区西城15道",
                price: "0.1",
                availableTime: "00:00-10:00",
                distance: "10.5"
            }]
        }
    })
})
app.get('/api/mock', (err, res) => {
    console.log("get")
    res.send({
        code: 200,
        message: null,
        data: {name:"foo",age:18}
    })
})
app.listen(8080, () => {
    console.log('Success');
})