import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex h='100vh' w='100vw' align='center' justify='center'>
      <Text fontSize='8xl'>Hello</Text>
    </Flex>
  )
}

export default Home
