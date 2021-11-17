import { Image ,Typography, Box, Text,HStack,VStack, Grid } from "@chakra-ui/react"
import * as React from "react"
import Navbar from "../compents/navbar"
import Card from "../compents/card"

import { createClient } from '@supabase/supabase-js'
import MoreCard from "../compents/morecards"
import {supabase} from "../compents/supa"

export default function Main({data}) {
  
  return (
    <div Style="background-color:black;">
        <Navbar/>
        <HStack height="400px" bg="#040c21" padding="100px" spacing="30%" >
            <VStack>
                <Text fontSize="6xl" as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >Safe Med</Text>
                <Text fontSize="2xl" fontWeight="40xl" fontStyle="Roboto" color="white" >Get Paid for your honest opinons</Text>
            </VStack>
        
        <Image borderRadius="10%" shadow="" src="https://cdn.discordapp.com/attachments/821703990709977138/909026261844762634/ideabizthonlogo.PNG"/>
        </HStack>
        
        <Grid templateColumns="repeat(3, 1fr)" gap={10} padding="10px">
        
        <MoreCard data={data}/>

        </Grid>
        
    </div>


  )
}


export async function getServerSideProps(context) {
  
  let { data, error } = await supabase
.from('med_details')
.select('*');

console.log(data)
  return {
    props: {data}, // will be passed to the page component as props
  }

}