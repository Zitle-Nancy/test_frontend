const axios = require('axios');
const { URL } = require('url');
export default (req, res) => {
  const query = req.query.q.trim();
  const myUrl = new URL(`https://api.mercadolibre.com/sites/MLA/search`)
  myUrl.search = `q=${query}`
  axios.get(myUrl.href)
  .then(response => {
    const { data } = response;
    res.status(200).json({
      author:{
        name: "mercado libre",
        lastname: "mercado libre"
      },
      categories: data.filters?.[0]?.values?.[0]?.path_from_root?.map(value => value.name) ?? [],
      items:data.results.slice(0,4).map(result => ({
        id: result.id,
        title: result.title,
        price:{
          currency:result.currency_id,
          amount:result.price
        },
        picture:result.thumbnail,
        condition: result.condition,
        free_shipping:result.shipping.free_shipping
      }))
    })
  })
  .catch(error => console.log(error))
}