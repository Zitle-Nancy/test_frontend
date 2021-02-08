import React, {useState} from 'react'
import Router from 'next/router'
import { Image } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'
import { Flex } from "@chakra-ui/react"
import { FormControl } from "@chakra-ui/react"

const Searcher = () => {
  const [value, setValue] = useState('');
  const search = (event) => {
    event.preventDefault();
    Router.push({
      pathname:`/items`,
      query:{search: value}
    })
  }

  return (
    <Flex 
      justify="center"
      align="center"
      backgroundColor="#fff159"
    >
      <Image
        boxSize="70px"
        pr="1rem"
        objectFit="contain"
        src="logo.png"
        alt="Mercado Libre"
      />
      <FormControl id="email" width="70%">
        <form onSubmit={search}>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type="text"
              size="lg"
              background="#fff"
              placeholder="Nunca dejes de buscar"
              borderRadius="2px"
              boxShadow= "0 1px 2px 0 rgb(0 0 0 / 10%)"
              h="2.5rem"
              onChange={event => setValue(event.target.value)}
            />
            <InputRightElement h="100%" display="flex" justifyContent="flex-end">
              <IconButton
                onClick={search}
                borderRadius="0" 
                aria-label="Search database" 
                icon={<Search2Icon />}
                h="95%"
                w="50%" 
              />
            </InputRightElement>
          </InputGroup>
        </form>
      </FormControl>
    </Flex>
  )
};

export default Searcher;