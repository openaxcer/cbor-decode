import * as React from "react"
import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { encode, decode } from 'cborg';
import { Buffer } from "buffer";
import {useState} from "react";

export default function Home() {

const [encoded_data,setEncodedData]=useState("")
const [decoded_data,setDecodedData]=useState("")

  function decodefn(value){
    const decoded = decode(Buffer.from(value, 'hex'));
    return decoded;
  }
  function encodefn(value){
    const encoded = encode(value);
    return encoded;
  }
  function onEncodeClick(){
    console.log("kasun");
    const encodedData=encodefn(encoded_data);
    setDecodedData(encodedData);
  }
  function onDecodeClick(){
    console.log("kasun");
    const decodedData=decodefn(decoded_data);
    setEncodedData(decodedData);
  }
  
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
          <Button  onClick={onEncodeClick} colorScheme='blue' >Encode</Button>

          <Textarea  value={encoded_data} onChange={(e)=>setEncodedData(e.target.value)} height={500} placeholder='Test' />
        </GridItem>
        <GridItem colSpan={2} h='10' >

          <Button onClick={onDecodeClick} colorScheme='blue'>Decode</Button>
          <Textarea  value={decoded_data} onChange={(e)=>setDecodedData(e.target.value)} height={500} placeholder='Test2' />

        </GridItem>
      </Grid>
      </Box>
    </ChakraProvider>
  );
}
