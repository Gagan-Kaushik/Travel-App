import { Badge } from '@chakra-ui/react'
import React,{ReactElement} from 'react'
import Sidebar from '../component/sidebar'
import {  Box } from '@chakra-ui/react'

const Mytickects = (): ReactElement => {
  return (
    <Box bg={"green.500"}>
      <Sidebar/>
      </Box>
  )
}

export default Mytickects
