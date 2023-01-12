import * as React from "react"
import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';


export default function Home() {
  return (
<ChakraProvider>
  <Box padding={100}>
      <Heading color={"Blue"}  >
        CBOR ENcoding System

      </Heading>

      <h1>Enter Text Below </h1>
      <h1> Diagnostic</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={2} h='10' >
          <Button colorScheme='blue' >Encode</Button>

          <Textarea  height={500} placeholder='Test' />
        </GridItem>
        <GridItem colSpan={2} h='10' >

          <Button colorScheme='blue'>Decode</Button>
          <Textarea  height={500} placeholder='Test2' />

        </GridItem>
      </Grid>
      </Box>
    </ChakraProvider>
  );


  
}
