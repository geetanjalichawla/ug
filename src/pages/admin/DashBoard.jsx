import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import { Box, Grid, GridItem, Heading, VStack ,HStack} from '@chakra-ui/react'
import Cards from './Components/Cards'
import BarChart from './Components/BarChart'
import DevelopmentTable from './Components/ProductsTable'
import Performance from './Components/Perfomance'
import CoustermsByDevices from './Components/CoustermsByDevices'
import ProgressBar from './Components/Comments'
import BasicAuthExample from './Components/CheckingCOmponent'
import { useSelector } from 'react-redux'
// import ExcelDownloadButton from './Components/ExcelDownloadButton'

function DashBoard() {
  const {data} = useSelector(state=>state.auth);
  console.log({data})
  return (
    <AdminLayout><Grid templateColumns='repeat(15, 1fr)' gap={4} w="full" px={2}>
      {/* <BasicAuthExample/> */}
      <GridItem colSpan={'11'} bgColor={'white'} rounded={'2xl'} p={[2,4]} w="full">
<VStack gap={[4,8]} w="full">
  <HStack>
    <Heading>DashBoard </Heading>
    {/* <ExcelDownloadButton/> */}
  </HStack>
<Cards/>
<Box  w="100%">
          <BarChart/>
        </Box>
        <DevelopmentTable/>
</VStack>
        </GridItem>
        <GridItem colSpan={'4'} w="full">
        <VStack gap={[4,8]} w="full">
  <Performance/>
  <CoustermsByDevices/>
  <ProgressBar/>
</VStack>
        </GridItem>
        
        </Grid></AdminLayout>
  )
}

export default DashBoard