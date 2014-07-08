var express = require('express');
var router = express.Router();

var braintree = require('braintree');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "ffdqc9fyffn7yn2j",
  publicKey: "qj65nndbnn6qyjkp",
  privateKey: "a3de3bb7dddf68ed3c33f4eb6d9579ca"
});

/* GET Creates a new token and returns it in the response */
router.get('/token', function (req, res) {
  gateway.clientToken.generate(null, function (error, response) {
    if (!error) {
      res.send(response.clientToken);
    } else {
      res.send(response);
    }
  });
});

/* POST Handles the amount & payment method nonce to execute a transaction */
router.post('/payment', function (req, res) {
  var amount = req.param('amount');
  var payment_method_nonce = req.param('payment_method_nonce');

  var sale = {
    amount: amount,
    payment_method_nonce: payment_method_nonce
  };

  gateway.transaction.sale(sale, function (error, response) {
    if (!error && response.success) {
      res.send('Payment done');
    } else {
      res.send(response);
    }
  });
});

module.exports = router;
