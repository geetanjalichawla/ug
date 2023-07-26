import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

function Card({title,value , profit}) {
  return (
    <Stat borderColor={'gray.200'} borderWidth={'1px'} rounded={'xl'} p={2} dropShadow={'2xl'}> 
    <StatLabel textTransform={'capitalize'}>{title}</StatLabel>
    <StatNumber>{value}</StatNumber>
    <StatHelpText>
      <StatArrow type={profit?'increase': 'decrease'} />
      23.36%
    </StatHelpText>
  </Stat>  )
}

export default Card