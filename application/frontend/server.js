const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const app = express();
const port = process.env.PORT_NUMBER || 4000;
const session = require('express-session');

app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'csc648spring2021campuscantina',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, originalMaxAge: 6000000 } // Set secure to true for https
}))

let guest = new Object();
guest.name = 'Guest';
guest.email = 'guest';
guest.type = 'guest';

const apiProxy = httpProxy.createProxyServer();

apiProxy.on('error', (err, req, res) => {
  console.log(err)
  res.status(500).send('Proxy Error');
});

app.all("/api/*", (req, res) => {
  // sends api requests to the backend
  console.log(req.path)
  apiProxy.web(req, res, {
    target: 'http://localhost:3001',
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/start-session', (req, res) => {
  console.log('Called start-session endpoint');
  req.session.loggedIn = true;
  req.session.name = req.query.name;
  req.session.email = req.query.email;
  req.session.type = req.query.type;
  console.log(req.session)
  res.send(req.session)
});

app.get('/check-session', (req,res) => {
  console.log('Called check-session endpoint');

  console.log(req.session);
  console.log(req.session.loggedIn);

  if (req.session.loggedIn) {
    res.send(req.session);
  } else {
    res.send(guest)
  }
});

app.get('/stop-session', (req, res) => {
  console.log('Called stop-session endpoint');
  req.session.loggedIn = false;
  req.session.destroy((err)=>{})
  res.send(guest)
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, () => console.log(`Frontend server on port ${port}!`));
