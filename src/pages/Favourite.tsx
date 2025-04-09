import { Badge, Box } from '@chakra-ui/react'
import React,{ReactElement} from 'react'
import Sidebar from '../component/sidebar';

const Favourite = ():ReactElement => {
  return (
  <Box bg={"blackAlpha.900"}>
      <Sidebar/>
      </Box>
  )
}

export default Favourite;
