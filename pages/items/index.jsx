import React, { useEffect, useState } from "react"
import { Flex, Image, Text, Box, Tag, TagLabel, Container } from "@chakra-ui/react"
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'
import Searcher from '../../components/Searcher'
import axios from 'axios';

const Products = (props) => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([])
  const getProducts = () => {
    const {search} = props
    return axios.get(`/api/items?q=${search}`)
  }
  
  const priceWithCommas = (price = '') => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    getProducts()
    .then(results => {
      if(results.status === 200){
        setResults(results.data.items)
        setCategories(results.data.categories)
      }
    })
    .catch(error => console.log(error))
  },[])

  return(
    <>
      <Searcher />
      <Container borderRadius="4px" maxWidth="885px"  backgroundColor="#fff">
        <Breadcrumb categories={categories} />
        {results.map(item => (
            <Link 
              href={`/items/${item.id}`}
              key={item.id}
            >
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
                      $ {priceWithCommas(item.price.amount)} &nbsp;
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
    </>
  )
}

export async function getServerSideProps(context) {
  const { search } = context.query;
  return {
    props: {
      search,
    },
  };
}
export default Products;
