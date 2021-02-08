import React, { useEffect, useState } from "react"
import { Container } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import Link from 'next/link'
import {Tag, TagLabel} from "@chakra-ui/react"

const axios = require('axios');

const Products = () => {
  const router = useRouter()
  const [results, setResults] = useState([]);
  const getProducts = () => {
    const {search} = router.query
    return axios.get(`/api/items?q=${search}`)
  }
  
  useEffect(() => {
    getProducts()
    .then(results => {
      if(results.status === 200){
        setResults(results.data.items)
      }else{
        setResults([])
      }
    })
    .catch(error => console.log(error))
  },[])

  console.log(results, 'results')
  return(
    <Container borderRadius="4px" maxWidth="885px"  backgroundColor="#fff">
      {results.map(item => (
          <Link href={`/items/${item.id}`}>
            <Flex w="100%" 
              justify="space-between" 
              p="20px 50px 20px 0" 
              cursor="pointer"
              borderBottom="thin solid #eee"
            >
              <Flex>
                <Image
                  boxSize="160px"
                  objectFit="contain"
                  src={item.picture}
                  alt={item.title}
                />
                <Box ml="3" paddingTop="1rem" w="calc(100% - 208px)">
                  <Text fontWeight="bold">
                    $ {item.price.amount} &nbsp;
                    {item.free_shipping && 
                      <Tag colorScheme="green" size="md">
                        <TagLabel>Envío gratis</TagLabel>
                      </Tag>
                    }
                  </Text>
                  <Text fontSize="md" paddingTop="0.5rem">
                    {item.title}
                  </Text>
                </Box>
              </Flex>
              <Text fontSize="sm" paddingTop="2.5rem">Capital federal</Text>
            </Flex>
          </Link>
        )
      )}
    </Container>
  )
}

export default Products;