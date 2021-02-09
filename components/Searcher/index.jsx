import React, {useState} from 'react'
import Router from 'next/router'
import Link from "next/link";
import { Image,Input, InputGroup, InputRightElement, IconButton, Flex, FormControl } from "@chakra-ui/react"
import { Search2Icon } from '@chakra-ui/icons'


const Searcher = (props) => {
  const [value, setValue] = useState(props.search || '');
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
    <Link href="/" cursor="pointer">
      <a>
        <Image
          boxSize="70px"
          pr="1rem"
          objectFit="contain"
          src="/logo.png"
          alt="Mercado Libre"
        />
      </a>
    </Link>
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
              value={value}
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