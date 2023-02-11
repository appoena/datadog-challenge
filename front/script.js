const API_URL = 'http://localhost:3330'

function createCheckout({ amount, type }) {
  return fetch(`${API_URL}/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount, type })
  })
    .then(response => {return response})
    .catch(error => {
      console.log(error)
    })
}

next.onclick = function (e) {
  // get form data
  const formData = new FormData(checkoutForm)
  amount = formData.get('amount')
  const type = formData.get('payment')

  if (!amount || !type) {
    alert('Por favor, preencha todos os campos')
    return
  }

  //NÃO ESQUECER! Remover essa linha antes de subir pra produção
  amount = null

  // create checkout
  createCheckout({ amount, type }).then(data => {
    if (data.status === 200) {
      window.location.href = `/checkout.html`
    }else{
      window.location.href = `/erro.html`
    }

  })
}