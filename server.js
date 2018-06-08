const express = require('express');
const app = express();
const fs = require('fs')
const compression = require('compression');

app.use(compression());
app.use(express.static('build'));

app.get('/author', (req, res) => {
  setTimeout(() => {
    res.send('Built with 🐟 by Tony the 🐈');
  }, 1000);
});

const listener = app.listen(process.env.PORT || 1234, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
