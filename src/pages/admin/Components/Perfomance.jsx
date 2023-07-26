import { Card, CardBody, Divider, Heading, Stack,Text,CardFooter, Button, CircularProgress, Box, Flex } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function Performance() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const dispatch =useDispatch();

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const username = "trial";
        const password = "assignment123";
        const basicAuthString = `${username}:${password}`;
        const encodedCredentials = btoa(basicAuthString);

        const response = await axios.post(
          "http://ec2-54-89-22-72.compute-1.amazonaws.com:8000/sample_assignment_api_3",
          { auth: encodedCredentials },
          {
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
            },
          }
        );

        setData(JSON.parse(response.data));
        dispatch({type: "setData" , payload: { name: "performance", value: JSON.parse(response.data) }}); // Specify the name and value here


      } catch (error) {
        setError(error.message);
      }
    };

    fetchCommentsData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
console.log(data)
const {description,score, title} =data;
  return (
    <Card w="100%" rounded={'3xl'} bgColor={'white'}>
  <CardBody w="100%" bgColor={'white'} rounded={'3xl'}>
    <Stack mt='6' spacing='3' w="100%" bgColor={'white'}>
      <Box h={'200px'} w="full" pos={'relative'} >
      <Flex justifyContent={'center'} alignItems={'start'}  h="100px" overflow={'hidden'} mx={'auto'} w="full">
        <CircularProgress mx={'auto'} value={score/2}  size='200px' thickness='4px'transform="rotate(-90deg)" />
        </Flex>
      <Flex position={'absolute'} flexDir={'column'} w={'full'} h={'full'} justifyContent={'center'} alignItems={'center'} top={0} bottom={0} right={0} left={0}>
      <Heading>
          {score}%
        </Heading>
        <Text fontSize={'sm'}>
      of 100
        </Text>
      </Flex>
      </Box>
      <Divider />

      <Heading size='md'>{title}</Heading>
      <Text w="100%" bgColor={'white'}>
        {description}
      </Text>
      
    </Stack>
  </CardBody>
  <CardFooter>
 
      <Button variant='outline' colorScheme='blue'>
        improve your score 
      </Button>
  
  </CardFooter>
</Card>
  )
}

export default Performance