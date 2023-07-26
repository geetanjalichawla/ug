import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const chartData = {
    series: [
      {
        name: 'Last Year',
        data: [5000, 10000, 20000, 32000, 12000, 13000],
      },
      {
        name: 'This Year',
        data: [6000, 2000, 40000, 21000, 9200, 8700],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        background: 'white', // sky blue background color
      },
      plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%', // Reduce columnWidth to make bars wider
            endingShape: 'rounded', // Add roundedness to the bars
            dataLabels: {
              enabled: false, // Hide bar labels (data labels)
            },
            borderRadius: 4, // Increase
        },
        
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          style: {
            colors: ['#333'], // dark blue x-axis label color
            fontSize: '12px',
          },
        },
      },



      yaxis: {
        title: {
          text: '$ (thousands)',
          style: {
            color: '#333', // dark blue y-axis title color
            fontSize: '14px',
          },
        },
        labels: {
          style: {
            colors: ['#333'], // dark blue y-axis label color
            fontSize: '12px',
          },
        },
      },
      fill: {
        opacity: 1,
        colors: ['#87CEEB', '#000080'], // sky blue and dark blue data colors
      },
      legend: {
        show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center', 
      floating: false,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
        labels: {
            colors: ['#87CEEB', '#000080'],
        },
      },
      
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },

  };

  return (
    <Box w="100%" rounded={'3xl'} bgColor={'white'}  p={[2,4]}>
        <Heading children="Comparison"  size={'md'}/>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={320} width={'100%'}/>
    </Box>
  );
};

export default BarChart;
