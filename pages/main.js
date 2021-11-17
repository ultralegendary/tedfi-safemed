import { Image ,Typography, Box, Text,HStack,VStack, Grid } from "@chakra-ui/react"
import * as React from "react"
import Navbar from "../compents/navbar"
import Card from "../compents/card"
export default function Main() {
  return (
    <div Style="background-color:black;">
        <Navbar/>
        <HStack height="400px" bg="#040c21" padding="100px" spacing={80} >
            <VStack>
                <Text fontSize="6xl" as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >Safe Med</Text>
                <Text fontSize="2xl" fontWeight="40xl" fontStyle="Roboto" color="white" >Get Paid for your honest opinons</Text>
            </VStack>
        
        <Image borderRadius="10%" shadow="" src="https://cdn.discordapp.com/attachments/821703990709977138/909026261844762634/ideabizthonlogo.PNG"/>
        </HStack>
        
        <Grid templateColumns="repeat(3, 1fr)" gap={10} padding="10px">
        <Card name="mali" percentage="30%" imgurl="https://cdn.discordapp.com/attachments/821703990709977138/909026295076225044/bizthonlogo.PNG" description="This is a meefj fejafejfk fjak"/>
        </Grid>
        
    </div>


  )
}
