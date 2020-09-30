const express = require('express');
const ejs = require('ejs');
const app = express();
const axios = require('axios');
const bParser = require('bodyparser');

app.use(express.static("public"));
app.set('view engine',ejs);

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.post('/country', (req, res) =>{

    let link = "https://restcountries.eu/rest/v2/name/estonia?fullText=true";
    axios.get(link)
    .then(function(response){
        let name = response.name;
        let topLevelDomain = response.topLevelDomain.alpha2Code;
        let callingCode = response.callingCodes[0];
        let capital = response.capital;
        let region = response.region;
        let subregion = response.subregion;
        let population = response.population;
        let timezone = response.timezones;
        let languageInaFullWordInEnglish = response.languages[0].name;
        let currencyCodeNameAndSymbol = "";
        let aUrlToTheFlagImage = response.flag;

        let country = req.body.country;
        console.log(response);

        
    })
    .catch(function(error){
        console.log(error)
    });

    res.render('index.ejs');
});

const port = 3000;
app.listen(port, ()=>{
    console.log('server is running on port: ' + port);
});