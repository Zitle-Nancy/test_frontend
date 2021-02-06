import { Container } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import Link from 'next/link'
const Products = () => {
  return(
    <Container borderRadius="4px" maxWidth="885px"  border="solid red 2px">
      <Link href={"/items/1"}>
        <Flex w="100%" justify="space-between" p="20px 50px 20px 0" cursor="pointer">
          <Flex>
            <Image
              boxSize="160px"
              objectFit="contain"
              src="https://http2.mlstatic.com/D_NQ_NP_748240-MLM43335890119_092020-V.webp"
              alt="Segun Adebayo"
            />
            <Box ml="3" paddingTop="1rem" w="calc(100% - 208px)">
              <Text fontWeight="bold">
                $ 1.980
              </Text>
              <Text fontSize="md" paddingTop="0.5rem">
                Huawei Matebook D 14 R7, Amd Ryzen 7,512 Gb + 8 Gb Ram, Gris
              </Text>
            </Box>
          </Flex>
          <Text fontSize="sm" paddingTop="2.5rem">Capital federal</Text>
        </Flex>
      </Link>
    </Container>
  )
}

export default Products;