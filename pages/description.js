import { Image ,Typography,InputGroup, Center,Box,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper, Text,HStack,VStack,Button,Stack,Spacer,FormControl,FormLabel,Input, Grid } from "@chakra-ui/react"
import * as React from "react"
import Navbar from "../compents/navbar"
import Card from "../compents/card"
import Footer from "../compents/footer"

export default function Description(props)
{
    
    return(
        
<div Style="background-color:black;">
        <Navbar/>
        <VStack height="1000px" bg="#040c21" padding="100px" spacing={20} >
            <Stack height={[1000]} spacing={0} bgGradient="linear(to-r,#6255ed, #23203d)"  w={[800]} borderRadius="10%">

            <Center>
            <Image fallbackSrc={props.imgurl} src="memo.png" borderTopRadius="inherit"/>
            <Text fontSize="6xl" m={5} as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >MEdicine name</Text>
            </Center>
            
            <Text fontSize="3xl" paddingRight="100px"  textAlign="right" as="abbr" fontWeight="10cm" fontStyle="Roboto" color="white" >{props.company_name}</Text>
            <Text fontSize="2xl" m={5} paddingLeft="50px" fontStyle="Roboto" color="white" >price: {props.price}</Text>
            <Text fontSize="2xl" m={5} paddingLeft="50px" fontStyle="Roboto" color="white" >Expiry: {props.expiry}</Text>
            <Text fontSize="3xl" m={1} padding="40px" fontStyle="Roboto" color="white">{props.description}</Text>
            

            </Stack>

        </VStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} padding="10px">
        
        </Grid>
        <Footer/>
</div>

    )
}