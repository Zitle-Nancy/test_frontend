const axios = require('axios');

export default (req, res) => {
  const id = req.query.q;

  const description = getDescription('/MLA903945107')
  .then(result => console.log(result, 'result '))
  .catch(error => console.log(error))
  
  axios.get(encodeURI(`https://api.mercadolibre.com/items/MLA903945107`))
  .then(response => {
    const { data } = response;

    res.status(200).json({
      author:{
        name: "mercado libre",
        lastname: "mercado libre"
      },
      item:{
        id: data.id,
        title: data.title,
        price:{
          currency:data.currency_id,
          amount:data.price
        },
        picture:data.thumbnail,
        condition: data.condition,
        free_shipping:data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: description
      }
    })
  })
  .catch(error => console.log(error))
}

const getDescription = (id) => {
  return axios.get(encodeURI(`https://api.mercadolibre.com/items/${id}/description`))
}