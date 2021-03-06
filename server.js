const express = require('express');
const ejs = require('ejs');
const app = express();
const axios = require('axios');
const bParser = require('body-parser');

app.use(express.static("public"));
app.use(bParser.urlencoded({extended: true}));
app.set('view engine',ejs);

var countryObject = null;

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.post('/country', (req, res) =>{
    let country = req.body.country;

    let link =`https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    axios.get(link)
    .then(function(response){
        
        countryObject = response.data[0];
        res.render("index2.ejs", {
            country: countryObject
        });

    })
    .catch(function(error){
        console.log(error)
    });

});

const port = 3000;
app.listen(port, ()=>{
    console.log('server is running on port: ' + port);
});