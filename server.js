const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());

const targetUrl = 'https://api.openai.com';

app.all('/*', (req, res) => {
  const url = targetUrl + req.url;
  req.pipe(request({ url, qs: req.query })).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
