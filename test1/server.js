const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.x8edr.mongodb.net/?retryWrites=true&w=majority', function (error, client) {

    if (error) {
        console.log(error)
    }

    db = client.db('todoapp');

    // db.collection('post').insertOne({ name : 'john', _id : 100 }, function(error, result){
    //     console.log('저장완료');
    // });

    // 연결되면 아래 출력
    app.listen(8083, function () {
        console.log('listening on 8083')
    });

    app.post('/add', function (req, res) {

        db.collection('post').insertOne({_id : 101, name : req.body.title , date : req.body.date }, function(error, result){
             console.log('저장완료');
        });

         res.send('Success')
        // console.log(req.body.date)
        // console.log(req.body.title)
    
    })


})




app.get('/pet', function (req, res) {
    res.send('펫용품 쇼필할 수 있는 페이지입니다.');
});

app.get('/beauty', function (req, res) {
    res.send('뷰티용품 사세요');
});

app.get('/write', function (req, res) {
    res.sendFile(__dirname + '/write.html')
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

