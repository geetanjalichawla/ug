import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch } from "react-redux";

const CoustermsByDevices = () => {
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
            "http://ec2-35-175-217-18.compute-1.amazonaws.com:8000/sample_assignment_api_4",
            { auth: encodedCredentials },
            {
              headers: {
                Authorization: `Basic ${encodedCredentials}`,
              },
            }
          );
  
          setData(JSON.parse(response.data));
          dispatch({type: "setData" , payload: { name: "costumer_by_devices", value: JSON.parse(response.data) }}); // Specify the name and value here


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

    console.log(data);
const {    offline_selling,
    web_sales
   } = data;
  const series = [
    {
      name:     `Web Sales ${web_sales }% `,
      data: [20, 50, 65, 80, 95, 70, 60, 55, 100],
    },
    {
      name: `Offline Sales ${offline_selling}%`,
      data: [5, 15, 30, 25, 40, 35, 30, 20, 10],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2, // Set the line width to your desired value

    
    },
    title: {
      text: "Sales this month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },

    },
    yaxis: {
        tickAmount: 3, // Set the number of ticks on the y-axis
      },
      xaxis: {      labels: {
        show: false, // Set to false to hide x-axis labels
      },
}, // Set to an empty object to hide x-axis labels

  };

  return (
    <Box w="100%" rounded={'3xl'} bgColor={'white'}  p={[2,4]} shadow={'lg'}>
      <ReactApexChart options={options} series={series} type="line" height={200} />
      
    </Box>
  );
};

export default CoustermsByDevices;
