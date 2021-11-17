import { Image ,Typography, Box,VStack, Text,HStack,Stack,Button, Center } from "@chakra-ui/react"
import * as React from "react"
import Link from 'next/link';

export default function Card(props){

    return(
        <Link href={{
            pathname: "/description",
            query: {
                name:props.name
            }
        }}>
        <VStack bg="grey" w="300px" borderRadius="10%">
            <Image fallbackSrc={props.imgurl} src="memo.png" borderTopRadius="inherit"/>
            <Stack bg="#5c6361" padding="10px" height="100px" w="inherit" borderBottomRadius="20">
                <Text>{props.name} | {props.percentage}</Text>
                <Text>{props.description}</Text>
            </Stack>
        </VStack>
        </Link>


    )
}
