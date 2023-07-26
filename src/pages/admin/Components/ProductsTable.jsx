import { Box, Button, HStack, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

function ProductsTable() {
  return (
    <Box w="full">
      <HStack w="full" justifyContent={'space-between'}>  <Heading>
        Products Data
        </Heading>
        <Button variant={'outline'}>
            full results
        </Button>
        </HStack>
        <TableContainer>
  <Table variant='unstyled'>
    <Thead borderBottomColor={'gray.400'} borderBottomWidth={'1px'}>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
   
  </Table>
</TableContainer>
    </Box>
  )
}

export default ProductsTable