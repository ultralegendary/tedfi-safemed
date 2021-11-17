import {Center} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import * as React from "react"

export default function Footer()
{return(
    
        <div style={{position: "absolute", bottom: 0, width:"100%" }} className="bg-gray-100">
            <Center>
                <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
                © SafeMed. All rights reserved.
                </div>
            </Center>
        </div>
    
    )
}