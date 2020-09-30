const express = require('express');
const ejs = require('ejs');
const app = express();
const axios = require('axios');
const bParser = require('body-parser');

app.use(express.static("public"));
app.set('view engine',ejs);

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.post('/country', (req, res) =>{

    let link = "https://restcountries.eu/rest/v2/name/estonia?fullText=true";
    axios.get(link)
    .then(function(response){
        console.log(response);
        let name = response.data.name;
        let topLevelDomain = response.data.alpha2Code;
        let callingCode = response.data.callingCodes[0];
        let capital = response.data.capital;
        let region = response.data.region;
        let subregion = response.data.subregion;
        let population = response.data.population;
        let timezone = response.data.timezones;
        let languageInaFullWordInEnglish = response.data.languages[0].name;
        let currencyCodeNameAndSymbol = "";
        let aUrlToTheFlagImage = response.data.flag;

        let country = req.body.country;
        

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