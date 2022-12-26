import React, { useState } from 'react';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function App() {
  const [encodedData, setEncodedData] = useState("");
  const [decodedData, setDecodedData] = useState("");

  const onEncode = () => {

    fetch("/getcode", {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: encodedData,
        isencoded: true
      })
    }).then((res) => {
      return res.json();
    }).then((resp) => {
      setDecodedData(resp.data.data.toString());

    }).catch((err) => {
      console.log(err.message);
    })

  }
  return (
    <ChakraProvider>
      <Heading color={"Blue"} >
        CBOR ENcoding System

      </Heading>

      <h1>Enter Text Below </h1>
      <h1> Diagnostic</h1>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
        <GridItem colSpan={2} h='10' >
          <Button colorScheme='blue' onClick={onEncode}>Encode</Button>

          <Textarea value={encodedData} onChange={(e) => setEncodedData(e.target.value)} height={500} placeholder='Test' />
        </GridItem>
        <GridItem colSpan={2} h='10' >

          <Button colorScheme='blue'>Decode</Button>
          <Textarea value={decodedData} onChange={(e) => setDecodedData(e.target.value)} height={500} placeholder='Test2' />

        </GridItem>
      </Grid>

    </ChakraProvider>
  );
}
export default App;
