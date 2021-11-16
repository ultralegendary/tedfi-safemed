import Head from 'next/head'
import Image from 'next/image'
import * as React from "react"
import main from "./main"
import createpost from "./createpost"
import styles from '../styles/Home.module.css'

import { ChakraProvider } from "@chakra-ui/react"
import Main from './main'
export default function Home() {
  return (
    <ChakraProvider>
      <createpost/>
    </ChakraProvider>

  )

}
