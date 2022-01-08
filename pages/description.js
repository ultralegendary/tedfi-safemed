import { Image ,Typography,InputGroup, Center,Box,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper, Text,HStack,VStack,Button,Stack,Spacer,FormControl,FormLabel,Input, Grid } from "@chakra-ui/react"
import * as React from "react"
import Navbar from "../compents/navbar"
import Card from "../compents/card"
import Footer from "../compents/footer"
import { supabase } from "../compents/supa"
export default function Description(props)
{
    const [votes,setVote] = React.useState(props.votes)

    return(
        
<div Style="background-color:black;">
        <Navbar/>
        <VStack height="1000px" bg="#040c21" padding="100px" spacing={20} >
            <Stack height={[1000]} spacing={0} bgGradient="linear(to-r,#6255ed, #23203d)"  w={[800]} borderRadius="10%">

            
            <Center>
            <Image w="300px" padding="30px"  src={props.img_url} borderRadius="20%" />
            <Text fontSize="6xl" m={5} as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >{props.name}</Text>
            </Center>
            <Text fontSize="2xl" padding="50px" m={5} as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >Votes : {votes}</Text>
            <Text fontSize="3xl" paddingLeft="50px"  textAlign="left" as="abbr" fontWeight="10cm" fontStyle="Roboto" color="white" >Company name: {props.company_name}</Text>
            <Text fontSize="2xl" m={5} paddingLeft="50px" fontStyle="Roboto" color="white" >Price: ${props.price}</Text>
            <Text fontSize="2xl" m={5} paddingLeft="50px" fontStyle="Roboto" color="white" >Expiry: {props.expiry}</Text>
            <Text fontSize="3xl" m={1} padding="40px" fontStyle="Roboto" color="white">Description: <br/> {props.description}</Text>
            <Center>
            <Button bg="black" height="60px" w="40%" onClick={() => setVote(votes + 1)}>
            <Text fontSize="5xl"  borderColor="Black" fontWeight="10cm" fontStyle="Roboto" color="white" >Vote</Text>
            </Button>
            </Center>

            </Stack>

        </VStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} padding="10px">
        
        </Grid>
        <Footer/>
</div>

    )
}

export async function getServerSideProps(context) {
    
    let { data, error } = await supabase
  .from('med_details')
  .select('*');
  for(let i=0;i<data.length;i++)
  {
    if(data[i].name==context.query.name)
    {
        return {
            props:data[i]
        }
    }
}
  
  }