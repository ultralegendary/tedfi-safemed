import { Image ,Typography, Box,VStack, Text,HStack,Stack,Button, Center } from "@chakra-ui/react"
import * as React from "react"

export default function Card(props){

    return(
        
        <VStack bg="grey" w="300px" borderRadius="10%">
            <Image fallbackSrc={props.imgurl} src="memo.png" borderTopRadius="inherit"/>
            <Stack bg="#5c6361" padding="10px" height="100px" w="inherit" borderBottomRadius="20">
                <Text>{props.name} | {props.percentage}</Text>
                <Text>{props.description}</Text>
            </Stack>
        </VStack>


    )
}
