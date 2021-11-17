import {ButtonGroup, Image ,Typography, Box, Text,HStack,VStack,Stack,Button,InputGroup,InputLeftElement, Center,Input, Link } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import * as React from "react"


export default function Navbar() {
    return (
    //bgColor="#1c1a2b"
    <HStack direction="row" w="" padding="15px" spacing={10} className="nav" justifyContent="center" bgGradient="linear(to-r, #17633c,#23203d)">
        <Link href="/main">
        <Button colorScheme="teal" variant="outline" color="#6615a1">
          Home
        </Button>
        </Link>
        <Link href="/createpost">
        <Button colorScheme="teal" variant="outline" color="#6615a1">
          Create post
        </Button>
        </Link>
        <Link href="/MyPosts">
        <Button colorScheme="teal" variant="outline" color="#6615a1">
          My posts
        </Button>
        </Link>
        <Link href="/About">
        <Button colorScheme="teal" variant="outline" color="#6615a1">
          About SafeMed
        </Button>
        </Link>
        <ButtonGroup>
        <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" variant="filled" bg="#55593d" placeholder="Search" _hover="" w="150px"/>
        </InputGroup>
        </ButtonGroup>
        
        
      </HStack>
      
    )
}