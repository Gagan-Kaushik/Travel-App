import { Badge, Box } from '@chakra-ui/react'
import React,{ReactElement} from 'react'
import Sidebar from '../component/sidebar';

const Dashbord = ():ReactElement => {
  return (
  <Box bg={"red.100"}>
      <Sidebar/>
      
      </Box>
  )
}

export default Dashbord;
