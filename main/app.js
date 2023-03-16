const express = require('express');
const morgan = require('morgan');

const loanRoute = require('./routes/loanRoute')
const customerRoute = require('./routes/customerRoute')
const loanledgerRoute = require('./routes/loanledgerRoute')

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/loan', loanRoute)
app.use('/customer', customerRoute)
app.use('/loanledger', loanledgerRoute)

module.exports = app;