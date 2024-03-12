const express = require('express');
const session = require('express-session');
const app = express();
 
const sessionConfig = {
  secret: 'pjwq09!@#jmx',
  name: 'saturnbank',
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie : {
    sameSite: 'strict',
  }
};