import { Image ,Typography, Box, Text,HStack,VStack, Grid } from "@chakra-ui/react"
import * as React from "react"
import Navbar from "../compents/navbar"
import Card from "../compents/card"
export default function createpost() {
  return (
<div Style="background-color:black;">
        <Navbar/>
        <HStack height="400px" bg="#040c21" padding="100px" spacing={80} >
            <VStack>
                <Text fontSize="6xl" as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >Safe Med</Text>
                <Text fontSize="2xl" fontWeight="40xl" fontStyle="Roboto" color="white" >Get Paid for your honest opinons</Text>
            </VStack>
        
        </HStack>

        <Grid templateColumns="repeat(3, 1fr)" gap={10} padding="10px">
        
        </Grid>
    </div>

  )
}