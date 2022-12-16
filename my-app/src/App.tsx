import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function App () {
  return (
    <ChakraProvider>
      <Heading color={"Blue"} >
        CBOR ENcoding System

      </Heading>

      <h1>Enter Text Below </h1>
      <h1> Diagnostic</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={2} h='10' >
          <Button colorScheme='blue'>Open Text</Button>

          <Textarea height={500} placeholder='Test' />
        </GridItem>
        <GridItem colSpan={2} h='10' >

          <Button colorScheme='blue'>Open Text</Button>
          <Textarea height={500} placeholder='Test2' />

        </GridItem>
      </Grid>

    </ChakraProvider>
  );
}
export default App;
