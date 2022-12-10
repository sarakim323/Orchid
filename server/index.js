const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
=======

>>>>>>> feature-relateditems
require('dotenv').config();

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


// routes
app.all('/*', (req, res) => {
<<<<<<< HEAD
=======
  console.log('request body:', req.body);
  // console.log('full url:', process.env.API_URL + req.url);
>>>>>>> feature-relateditems

  return axios({
    method: req.method,
    url: process.env.API_URL + req.url,
    headers: {
      Authorization: process.env.API_TOKEN
    },
    data: req.body
  })
    .then((response) => {
<<<<<<< HEAD
      // console.log('response from API:', response);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
		  res.header("Access-Control-Allow-Credentials", "true");
      res.send(response.data);
      res.end();
    })
    .catch((err) => {
      console.log('API requesterror:', err);
      res.sendStatus(500);
    });
=======
      console.log('response from API:', response.data);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

      res.status(200).send(response.data);
    })
>>>>>>> feature-relateditems
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));