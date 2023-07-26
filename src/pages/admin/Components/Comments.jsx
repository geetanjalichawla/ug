import React, { useEffect, useState } from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProgressBar = () => {
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
          "http://ec2-54-89-22-72.compute-1.amazonaws.com:8000/sample_assignment_api_5",
          { auth: encodedCredentials },
          {
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
            },
          }
        );

        setData(JSON.parse(response.data));
        dispatch({type: "setData" , payload: { name: "comments", value: JSON.parse(response.data) }}); // Specify the name and value here

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

  const { neutral, negative, positive, remark } = data;
  const totalComments = neutral+ negative+ positive;

  const neutralPercentage = (neutral / totalComments) * 100;
  const negativePercentage = (negative / totalComments) * 100;
  const positivePercentage = (positive / totalComments) * 100;

  return (
    <Box w="100%" rounded="3xl" bgColor="white" p={[2, 4]}>
      <Text mb="2">Total Comments: {totalComments}</Text>
  <HStack w="full" gap={2}>
  <Box
          display={'inline-block'}
          w={`${neutralPercentage * 2}px`}
          backgroundColor="#FFCD8E"
          h="2"
          borderRadius="full"
        />
        <Box
          display={'inline-block'}
          w={`${negativePercentage * 2}px`}
          backgroundColor="#FEA7A9"
          h="2"
          borderRadius="full"
        />
        <Box
          display={'inline-block'}
          w={`${positivePercentage * 2}px`}
          backgroundColor="#B1F2CB"
          h="2"
          borderRadius="full"
        />
  </HStack>
      <Text mt="2" fontSize="sm" fontWeight="bold">
        Remarks: {remark}
      </Text>
    </Box>
  );
};

export default ProgressBar;
