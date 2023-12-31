// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
// import FixedPlugin from "components/fixedPlugin/FixedPlugin";
// Custom components
import { NavLink } from "react-router-dom";
// Assets
import { FaChevronLeft } from "react-icons/fa";

function AuthIllustration({children}) {
  // Chakra color mode
  return (
    <Flex position='relative' h='max-content'>
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='start'
        direction='column'>
        <NavLink
          to='/admin'
          style={() => ({
            width: "fit-content",
            marginTop: "40px",
          })}>
          <Flex
            align='center'
            ps={{ base: "25px", lg: "0px" }}
            pt={{ lg: "0px", xl: "0px" }}
            w='fit-content'>
            <Icon
              as={FaChevronLeft}
              me='12px'
              h='13px'
              w='8px'
              color='secondaryGray.600'
            />
            <Text ms='0px' fontSize='sm' color='secondaryGray.600'>
              Dashboard
            </Text>
          </Flex>
        </NavLink>
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h='100%'
          bgImage={'https://images.pexels.com/photos/16108218/pexels-photo-16108218/free-photo-of-food-healthy-sea-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
          minH='100vh'
           bgSize={'contain'}
          w={{ lg: "50vw", "2xl": "44vw" }}
          position='absolute'
          right='0px'>
          <Flex
            justify='center'
            align='end'
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}></Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default AuthIllustration;
