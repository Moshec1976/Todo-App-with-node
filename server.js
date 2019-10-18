// requirements 

const express = require('express');
const bodyPar = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyPar.urlencoded({
    extended: false
}));
app.use(bodyPar.json());

// Fire controllers

// toDoController(app);

let data = [{
    item: 'make kaki',
    id: 1
}, {
    item: 'do kaki',
    id: 2
}, {
    item: 'more kaki',
    id: 3
}];

// server setup 

app.listen(3000, () => {
    console.log('Now listening to port 3000');
});


app.get('/getWhatToDo', (req, res) => {
    res.send(data);
});



app.post('/insertToDo', (req, res) => {
    console.dir(req.body);
    let item = req.body
    let lastItemId = data[data.length - 1].id
    item.id = (lastItemId + 1);
    console.log(item)
    data.push(item);
    res.send(data);

});


app.delete('/deleteItem', (req, res) => {
    data = data.filter(singleItem => {
        return req.body.id != singleItem.id
    });
    res.send({
        wasDeleted: true
    })
});