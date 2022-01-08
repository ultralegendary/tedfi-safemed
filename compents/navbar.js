import {ButtonGroup, Image ,Typography, Box, Text,HStack,VStack,Stack,Button,InputGroup,InputLeftElement, Center,Input, Link } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import * as React from "react"


export default function Navbar() {
    return (
    //bgColor="#1c1a2b"
    <HStack direction="row" w="" padding="15px" spacing={10} className="nav" justifyContent="center" bgGradient="linear(to-r,#13547a,#80d0c7)">
        <Link href="/">
        <Button variant="" color="WHITE">
          Home
        </Button>
        </Link>
        <Link href="/createpost">
        <Button variant="" color="WHITE">
          Create post
        </Button>
        </Link>
        <Link href="/MyPosts">
        <Button variant="" color="WHITE">
          My posts
        </Button>
        </Link>
        <Link href="/About">
        <Button variant="" color="WHITE">
          About SafeMed
        </Button>
        </Link>
        <ButtonGroup>
        <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" bg="" placeholder="Search" _hover="" w="150px"/>
        </InputGroup>
        </ButtonGroup>
        
        
      </HStack>
      
    )
}