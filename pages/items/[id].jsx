import React, {useState, useEffect} from 'react'
import { Container, Button, Flex, Image, Text, Box } from "@chakra-ui/react"
import axios from 'axios';
const Product = (props) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProduct()
    .then(result => {
      if(result.status === 200){
        setProduct(result.data)
      }
    })
    .catch(error => console.log(error))
  }, [])

  const getProduct = () => {
    const { id } = props
    return axios.get(`/api/items/${id}`)
  }

  const priceWithCommas = (price = '') => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return(
    <Container borderRadius="4px" maxWidth="885px" background="#fff">
        <Flex w="100%" justify="space-between" p="20px">
          <Flex h="100%" w="70%" flexDirection="column" alignItems="start">
            <Box boxSize="xs" >
              <Image
                w="100%"
                h="100%"
                objectFit="contain"
                src={((product || {}).item || {}).picture}
                alt={((product || {}).item || {}).title}
              />
            </Box>
            <Box>
              <Text fontSize="md" paddingTop="2.5rem" fontWeight="bold">Descripción del producto</Text>
              <Text fontSize="sm" paddingTop=".5rem">
                {((product || {}).item || {}).description}
              </Text>
            </Box>
          </Flex>
            <Box ml="3">
              <Text fontSize="xs">
                {((product || {}).item || {}).condition} - {((product || {}).item || {}).sold_quantity} vendidos
              </Text>
              <Text fontSize="md" paddingTop="0.2rem" fontWeight="bold">
                  {((product || {}).item || {}).title}
              </Text>
              <Text fontWeight="bold" fontSize="md" padding="1rem 0 1.5rem 0">
                $ {priceWithCommas((((product || {}).item || {}).price || {}).amount)}
              </Text>
              <Button colorScheme="blue"  color="#fff" w="19rem" h="2.5rem">
                Comprar
              </Button>
            </Box>
        </Flex>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}

export default Product;