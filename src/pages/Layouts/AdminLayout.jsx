import {
    Accordion,
    Box,
    Flex,
    HStack,
    Img,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link, useLocation } from "react-router-dom";
  import {BsGridFill} from 'react-icons/bs'
  import {   MdSoupKitchen } from "react-icons/md";
import { Text } from "@chakra-ui/react";
  
  function AdminLayout({ children }) {

    const param = useLocation();

  
      
    return (
      <Box
        w={"100vw"}
        pos={"relative"}
        transition={"all"}
        transitionDuration={"500ms"}
  overflow={"hidden"}      
        h={"100vh"} 
        bgColor={'gray.50'}

        overflowX={'none'}
        fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'md']}
  
      > 
        <Flex
          w={"full"}
          transition={"all"}
          transitionDuration={"500ms"}
          h={"100%"}
          gap="0"
        >
          <Sidebar  param={param}/>
  
          <Box w="100%" h={"100%"}  borderTopLeftRadius={'3xl'} overflow={'auto'}>
            <Box  h={"100%"} w="100%">
              {children}
            </Box>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  export default AdminLayout;
  

  
  
  
  
  
  
  const navBar = [
    {title : "Dashboard" , pathname :"/" , icon :<BsGridFill/> ,  },
    {title : "Orders" , pathname :"/Orders" , icon:<MdSoupKitchen/>},
  
  ];
  
  
  
  
  function Sidebar ({param }) {
  
    return (
      <Box
      h="100%"
      minH={"100vh"}
      pos={["absolute", "sticky"]}
      display={["none", "block"]}
      zIndex={"10"}
      backgroundColor={'red'}
      maxW={"100vw"}
      transition={"all"}
      w="250px"
      transitionDuration={"500ms"}
      top={0}
      bgColor={'gray.50'}
      px={2}
  
    >
      <Box position={{ md: "sticky" }} top={"0"} h={"100vh"} overflowY={"auto"}        px={0}>
        <VStack
          px={0}
          transition={"all"}
          transitionDuration={"500ms"}
          placeContent={'start'}
          placeItems={'start'}
          gap={'2'}
          w="full"
          h="full"
      >
        <HStack w="full" mt={2} justifyContent={"space-around"}>       
           <Img src={'https://media.licdn.com/dms/image/D4D0BAQHFVGFgxBzdJg/company-logo_200_200/0/1686760203647?e=1698278400&v=beta&t=x9BnJylJhK2dgXkjkcsiIxIIGeHfv6pUokDxPperHaM'} w={'20'} transition={'all'} px={0}  />
  
  
  </HStack>
          <VStack  w="full" justifyContent={'space-between'}         h="full"
  > 
  
  <Accordion allowMultiple w="full"     h="full" >
  <VStack    w="full"     h="full" gap={0} spacing={0}
  >
  
  
  {
    navBar.map((navItem) => {
      return (
       <NavItem navItem={navItem} param={param} />
      ) 
    })
  }
  
  </VStack>
  
  </Accordion>
  <VStack>
    </VStack>    
  </VStack>
    </VStack>
      </Box>
    </Box>
    )
  }
  
  
  
  
  
  function NavItem ({param  ,navItem}) {
    const location = useLocation();
      const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  let activeIcon = useColorModeValue("blue.500", "white");
  let textColor = useColorModeValue("gray.500", "white");
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "gray.600",
    "gray.600"
  );

    return (
  
      <Link to={navItem.pathname} style={{width:"100%" , padding:0 , m:"0"}}>
                  {/* <NavLink key={index} to={route.layout + route.path}> */}
            {navItem.icon ? (
              <Box>
                <HStack
                  spacing={
                    activeRoute(navItem.pathname.toLowerCase()) ? "22px" : "26px"
                  }
                  bg={
                    activeRoute(navItem.pathname.toLowerCase())
                      ? 'white'
                      : "transparent"
                  }
                  py='3'
                  rounded={'xl'}
                  ps='10px'>
                  <Flex w='100%' alignItems='center' justifyContent='center'>
                    <Box
                      color={
                        activeRoute(navItem.pathname.toLowerCase())
                          ? activeIcon
                          : textColor
                      }
                      me='18px'>
                      {navItem.icon}
                    </Box>
                    <Text
                      me='auto'
                      color={
                        activeRoute(navItem.pathname.toLowerCase())
                          ? activeColor
                          : textColor
                      }
                      fontWeight={
                        activeRoute(navItem.pathname.toLowerCase())
                          ? "bold"
                          : "normal"
                      }>
                      {navItem.title}
                    </Text>
                  </Flex>
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={
                    activeRoute(navItem.pathname.toLowerCase()) ? "22px" : "26px"
                  }
                  py='5px'
                  ps='10px'>
                  <Text
                    me='auto'
                    color={
                      activeRoute(navItem.pathname.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(navItem.pathname.toLowerCase()) ? "bold" : "normal"
                    }>
                    {navItem.title}
                  </Text>
                  <Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
                </HStack>
                </Box>)}
          {/* </NavLink> */}
                </Link>
  
    )
  }
