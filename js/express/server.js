const axios = require('axios');
const express = require('express');

const { asyncMiddleware } = require('./utils/middleware');

const app = express();

app.set('port', process.env.PORT || 8080);

app.get('/weather', asyncMiddleware(async (req, res, next) => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${req
            .params.city}&APPID=ba345b9219e4508665da076f3599e816&units=${req
            .params.units}`;
        const weather = await axios.get(url).data;
        res.json(weather);
    })
);

app.listen(app.get('port'), () =>
    console.log(`Listening on port ${app.get('port')}.`)
);
