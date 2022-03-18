const Checkout = require('../database/model/checkout');


class CheckoutController {
  Register(request, response) {
    try{
      const { amount, type} = request.body;
      if (amount) {
        const checkoutCreated = Checkout.create({ type, amount });
        response.status(200).json(checkoutCreated);
      } else{
        console.log('error.msg', "Valor de 'amount' chegou nulo");
        response.status(500).send();
      }
    }catch(error){
        console.log('error', error)
        response.status(500).send();
    }
    

  }
}

module.exports = new CheckoutController();