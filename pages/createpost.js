  import { Image ,Typography,InputGroup, Box,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper, Text,HStack,VStack,Button,Stack,Spacer,FormControl,FormLabel,Input, Grid } from "@chakra-ui/react"
import * as React from "react"
import { useForm } from "react-hook-form";
import Navbar from "../compents/navbar"
import Card from "../compents/card"
import { createClient } from '@supabase/supabase-js'
import Footer from "../compents/footer"
export default function CreatePost(props) {
  const registerUser = async event => {
    event.preventDefault()
    
  }
  const supabaseUrl = 'https://jetjcnitoqjhaddkhcew.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzA4MjE3OCwiZXhwIjoxOTUyNjU4MTc4fQ.19O9f19syyGg6-tU_SGeSW_Ryezip6B5DAfLNvmO-Vs'
  const supabase = createClient(supabaseUrl, supabaseKey)
  const {  register, handleSubmit, formState: { errors} } = useForm();

//  const onSubmit = data => console.log(data);

  async function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     resolve();
    //   }, 3000);
    // });
    
    const { data, error } = await supabase
  .from('med_details')
  .insert([
    values// AKA the json here
  ])
  console.log({values})
  
  console.log(error)
  console.log("ehre")
  }
  function registerMed(values) {
    console.log(values)
    
  }
  /*
  select 
  "status", "content"::jsonb
from 
  http_post(
    'https://jsonplaceholder.typicode.com/posts',
    '{ "title": "foo", "body": "bar", "userId": 1 }',
    'application/json'
  );*/

  return (
<div Style="background-color:black;">
        <Navbar/>
        <VStack height="800px" bg="#040c21" padding="100px" spacing={20} >
            <Stack height={[200]} spacing={0} bgGradient="linear(to-r,#6255ed, #23203d)"  w={[800]} borderTopRadius="10%30%">
            
                <Text fontSize="6xl" m={5} paddingLeft="200px" as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >Create Post</Text>
                <Text fontSize="2xl" m={10} paddingLeft="130px" paddingBottom="20px"  fontWeight="10cm" fontStyle="Roboto" color="white" >Create a Medicine and get verified in the community</Text>
                <Stack height={[400]}  bg="#23203d" w={[800]} >
                <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup padding="20px">
                  <FormControl id="first-name" isRequired>
                      
                    <FormLabel color="white">Name</FormLabel>
                    <Input placeholder="Name" {...register("name")} />
                    
                    <FormLabel color="white">Medical Company/Pharmacy</FormLabel>
                    <Input placeholder="Company Name" {...register("company_name")} />
                    <FormLabel color="white">Description</FormLabel>
                    <Input placeholder="description" {...register("description")} />
                    <FormLabel color="white">Price</FormLabel>
                    <NumberInput max={50000} min={0}{...register("price")} >
                    <NumberInputField />
                        <NumberInputStepper color="white">
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                     </NumberInput>
                    <FormLabel color="white">Expired Time</FormLabel>
                    <Input placeholder="Expired Time" {...register("expiry")}/>

                    </FormControl>
                    </InputGroup>
                    <Button
                        size="sm"
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                    >                        Submit
                    </Button>
                    </form>
                </Stack>
            </Stack>

            
        </VStack>

        <Grid templateColumns="repeat(3, 1fr)" gap={10} padding="10px">
        
        </Grid>
        <Footer/>
    </div>

  )
}
