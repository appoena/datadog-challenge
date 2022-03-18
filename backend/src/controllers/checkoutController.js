const Checkout = require('../database/model/checkout');
const tracer = require('dd-trace').init();
const axios = require('axios')


class CheckoutController {
  Register(request, response) {
    const span = tracer.scope().active()
    try {
      const { amount, type } = request.body;
      if (amount) {
        const checkoutCreated = Checkout.create({ type, amount });
        response.status(200).json(checkoutCreated);
      } else {
        span.setTag('error.msg', "Valor de 'amount' chegou nulo");
        response.status(500).send();
      }
    } catch (error) {
      span.setTag('error', error)
      response.status(500).send();
    }


  }
}

module.exports = new CheckoutController();