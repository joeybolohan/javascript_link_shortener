// server.js

const express = require('express');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');
const geoip = require('geoip-lite');
const uaParser = require('ua-parser-js');
const fs = require('fs');

const app = express();

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Route to shorten a URL
app.post('/shortUrls', async (req, res) => {
  let url;
  try {
    url = await shortUrl.create({ full: req.body.fullUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error creating shortened URL');
  }
  res.redirect('/');
});

// Route to access a shortened URL
app.get('/:shortUrl', async (req, res) => {
  let url;
  try {
    url = await shortUrl.findOne({ short: req.params.shortUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error retrieving shortened URL');
  }

  if (url == null) return res.sendStatus(404);

  // Log the click
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip);
  const ua = uaParser(req.headers['user-agent']);
  const logLine = `${new Date().toISOString()}, ${geo ? geo.country : 'Unknown'}, ${ua.os.name}, ${ip}\n`;

  fs.appendFile('log.txt', logLine, (err) => {
    if (err) console.error(err);
  });

  res.redirect(url.full);
});

app.listen(process.env.PORT || 5000);
