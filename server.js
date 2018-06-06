const express = require('express');
const app = express();
const fs = require('fs')
const resize = require('resize-img');

app.use(express.static('build'));

app.get('/author', (req, res) => {
  setTimeout(() => {
    res.send('Built with 🐟 by Tony the 🐈');
  }, 1000);
});

app.get('/imgs/:img', (req, res) => {
  fs.readFile(`${__dirname}/imgs/${req.params.img}`, (err, data) => {
    resize(data, { 
      width: parseInt(req.query.width) 
    }).then(buf => {
      res.write(buf);
      res.end();
    });
  });
});

const listener = app.listen(process.env.PORT || 1234, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
