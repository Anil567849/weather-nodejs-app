const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');


// 8000 na mile to [process.env.PORT] se jo milega by default us par chal pdega 
const port = process.env.PORT || 8000;


const publicPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicPath));    

app.set('view engine', 'hbs');
app.set("views", viewPath);

hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/weather', (req, res) => {
    res.render('weather.hbs');
});


app.get('*', (req, res) => {
    res.render('error.hbs');
});


app.listen(8000, () => {
    console.log('listening 8000');
});