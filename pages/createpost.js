import { Image ,Typography,InputGroup, Box,NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper, Text,HStack,VStack,Button,Stack,Spacer,FormControl,FormLabel,Input, Grid } from "@chakra-ui/react"
import * as React from "react"
import { useForm } from "react-hook-form";
import Navbar from "../compents/navbar"
import Card from "../compents/card"
import { createClient } from '@supabase/supabase-js'
import Footer from "../compents/footer"
import {supabase} from "../compents/supa"
export default function CreatePost(props) {
  const registerUser = async event => {
    event.preventDefault()
    
  }
  console.log("react app supa base key")
  const {  register, handleSubmit, formState: { errors} } = useForm();

//  const onSubmit = data => console.log(data);

  async function onSubmit(values) {
    
    const { data, error } = await supabase
  .from('med_details')
  .insert([
    values
  ])
    console.log(error)
  }
  function registerMed(values) {
    
    
  }
  

  return (
<div Style="background-color:black;">
        <Navbar/>
        <VStack height="1000px" bg="#040c21" padding="100px" spacing={20} >
            <Stack height={[200]} spacing={0} bgGradient="linear(to-r,#6255ed, #23203d)"  w={[800]} borderTopRadius="10%30%">
            
                <Text fontSize="6xl" m={5} paddingLeft="200px" as="b" fontWeight="10cm" fontStyle="Roboto" color="white" >Create Post</Text>
                <Text fontSize="2xl" m={10} paddingLeft="130px" paddingBottom="20px"  fontWeight="10cm" fontStyle="Roboto" color="white" >Create a Medicine and get verified in the community</Text>
                <Stack height={[800]}  bg="#23203d" w={[800]} >
                <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup padding="20px">
                  <FormControl id="first-name"isRequired >
                      
                    <FormLabel paddingY="10px" color="white">Medcine 
                    Name</FormLabel>
                    <Input color="white" placeholder="Name" {...register("name")} />
                    
                    <FormLabel paddingY="10px" color="white">Medical Company/Pharmacy</FormLabel>
                    <Input color="white" placeholder="Company Name" {...register("company_name")} />
                    <FormLabel paddingY="10px" color="white">Description</FormLabel>
                    <Input color="white" placeholder="description" {...register("description")} />
                    <FormLabel paddingY="10px" color="white">Price</FormLabel>
                    <Input color="white" placeholder="price" {...register("price")} />
                    <FormLabel paddingY="10px" color="white">Expired Time</FormLabel>
                    <Input color="white" placeholder="Expired Time" {...register("expiry")}/>
                    <FormLabel paddingY="10px" color="white">Company logo</FormLabel>
                    <Input type="url" color="white" placeholder="logo url" {...register("img_url")}/>
                    </FormControl>
                    </InputGroup>
                    <Button
                        
                        paddingX="377px"
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
