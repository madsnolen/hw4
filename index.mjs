import express from 'express';
import starwars from 'starwars';

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
    const quote = starwars();
   res.render('index', { quote });
});

app.get('/nosql', (req, res) => {
    res.render('nosql');
});

app.get('/relational', (req, res) => {
   res.render('relational');    
});

app.get('/realworld', (req, res) => {
    
   res.render('realworld');
});

app.get('/air', async (req, res) => {
    let url = `https://hub.juheapi.com/aqi/v1/city?apikey=ddea136e1452ef2bcbe9e8b4ec6cabdf&q=Los Angeles`;
    let response = await fetch(url);
    let data = await response.json();

    res.render('air', { air: data });
});

app.listen(3000, () => {
   console.log('server started');
});
