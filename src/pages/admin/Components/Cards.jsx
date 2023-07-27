import { HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Cards() {
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
          "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_1/",
          { auth: encodedCredentials },
          {
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
            },
          }
        );

        setData(JSON.parse(response.data));
        dispatch({type: "setData" , payload: { name: "revenue_cards", value: JSON.parse(response.data) }}); // Specify the name and value here

      } catch (error) {
        setError(error.message);
      }
    };

    fetchCommentsData();
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
console.log(data)
const {purchase,
  refunds,
  revenue
 } =data;

  return (
    <HStack w="full">
        <Card title = {'purchase'} value ={purchase} profit />
        <Card title = {'refunds'} value ={refunds} />
        <Card title = {'revenue'} value ={revenue} profit/>
    </HStack>

    )
}

export default Cards