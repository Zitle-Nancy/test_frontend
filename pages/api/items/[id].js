const axios = require('axios');

export default async (req, res) => {
  const {id} = req.query;
  const description = await getDescription(`/${id}`)
  .then(result => {
    return result.data.plain_text
  })
  .catch(error => console.log(error))

  axios.get(encodeURI(`https://api.mercadolibre.com/items/${id}`))
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
        picture:data.pictures?.[0]?.secure_url,
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