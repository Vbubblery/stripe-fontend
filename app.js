const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
var fs = require('fs');
const https = require('https');
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();
const PORT = process.env.PORT || 8080;

app.prepare().then(() => {
  const server = express();
  const stripe = require("stripe")("sk_test_eEvb0f1Ej9ixCvvMkTXobL7r");
  server.use(require("body-parser").json());
  server.use(cors());

  server.post("/stripe/charge", async (req, res) => {
    // console.log(req.body);
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body.id
      });
      res.json({status});
    } catch (err) {
      console.log(err)
      res.status(500).end();
    }
  });
  server.get('/user/:id',(req,res)=>{
    const actualPage = '/user';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams)
  })
  server.get('*', (req, res) => handler(req, res));
  server.use(handler);
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${PORT}`)
  })
});
