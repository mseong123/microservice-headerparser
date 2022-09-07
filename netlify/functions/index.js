var express = require('express');
const serverless=require('serverless-http');
var requestIP = require("request-ip")
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.enable("trust proxy");

//API endpoint
app.get('/api/whoami', function (req, res) {
  res.json({ 
    ipaddress: requestIP.getClientIp(req),
    language: req.headers["accept-language"],
    software:req.headers["user-agent"]
   });
});

module.exports.handler = serverless(app)