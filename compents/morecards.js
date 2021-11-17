import { Image ,SimpleGrid,Typography,Grid, Box,VStack, Text,HStack,Stack,Button, Center } from "@chakra-ui/react"
import * as React from "react"
import Card from "../compents/card"

export default function MoreCard(props){
return(
        <SimpleGrid padding="40px" columns={[4]} spacingY="50px" spacingX="350px" >
            {
                props.data.map((item,index)=>(
                    <Card name={item.name} percentage="30%" imgurl={item.img_url} description={item.description} />
                )
                )}
        </SimpleGrid>
)
}
