const compression = require('compression');
const path = require('path');
const express = require('express');
const netjet = require('netjet');
const app = express();
const port = process.env.PORT || 8080;

// Gzip
app.use(compression());

// Insert preload link headers in HTML responses
app.use(netjet({
  cache: {
    max: 500,
  },
}));

// Run the app by serving the static files
// in the dist directory
const oneDay = 86400000; // in milliseconds
app.use(express.static(__dirname + '/../dist', {
  maxage: oneDay,
}));

// Start the app by listening on the default
// Heroku port
app.listen(port);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(`${__dirname}/../dist/index.html`));
});

console.log(`Server listening on ${port}`);
