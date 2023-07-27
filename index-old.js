import express from 'express'

const app = express();

app.get('/', function(req, res){
    res.send('Hello from my API!')
});

//API call: http://localhost:4009/api/greet?username=Andre
/*app.get('/api/greet', function(req, res){
    console.log(req.query);
    const username = req.query.username;
    res.json({
        message : `Hello, ${username}!`
    })
});
*/
app.get('/api/greet/:username', function(req, res){
    console.log(req.params);
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!`
    })
});

const PORT = 4009;

app.listen(PORT, function() {
    console.log(`app started on port ${PORT}`);
});

