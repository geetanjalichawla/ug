import {
    Accordion,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Heading,
    IconButton,
    Img,
    Menu,
    MenuButton,
    MenuGroup,
    MenuItem,
    MenuList,
    Switch,
    VStack,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import { Link, useLocation } from "react-router-dom";
  import { BiDish,  BiHistory, BiHomeAlt, BiUser,  } from "react-icons/bi";
  import {BsGridFill} from 'react-icons/bs'
  import { useDispatch, } from "react-redux";
  import { RiMenu5Line, RiRestaurant2Line } from "react-icons/ri";
  import { GiHelp, GiMeal } from "react-icons/gi";
  import { TbDiscount2 } from "react-icons/tb";
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
  

  
  
   function ProfileMenu (){
    const dispatch = useDispatch();
    
    return(      <Menu zIndex={1000} position={"relative"}>
      <MenuButton as={Button} p={2} rounded={"full"} fontSize={"2xl"}>
        <BiUser />
      </MenuButton>
      <MenuList zIndex={1000} position={"relative"}>
        <MenuGroup title="Profile">
        <Link to={'/profile'}>
          <MenuItem>My Account</MenuItem>
           </Link>
         <MenuItem>Payments </MenuItem>
         
          <MenuItem onClick={() => dispatch({type:'logout'})}>logout</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>)
  }
  function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const param = useLocation();
  
    return (
      <>
      <IconButton ref={btnRef} colorScheme="pink" variant={"ghost"} p={2}  fontSize={"2xl"}  onClick={onOpen} display ={['block', 'none']}>
              <RiMenu5Line />
            </IconButton>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>PinkAprons </DrawerHeader>
  
            <DrawerBody>
  
            <Box  minH={"100vh"} w={"full"}>
              <VStack
                pb={"10"}
                transition={"all"}
                transitionDuration={"500ms"}
                placeContent={'start'}
                placeItems={'start'}
                gap={'2'}
                px={'2'}
                w="full"
              >
                <Link to="/admin">
                  <Button
                  onClick={onClose}
                    fontSize={"md"}
                    variant={"ghost"}
                    w={"full"}
                    h={"max-content"}
                    p="0"
  
                    _hover={{ bgColor: "none" }}
                  >
                    <HStack 
                    gap={4} spacing={"0px"} w={"full"}>
                      <Box
                        display={"flex"}
                        w="30px"
                        
                        backgroundColor={`${param.pathname === "/dashboard" ? "pink.500" : "white" }`}
                        color={`${param.pathname === "/dashboard" ? "white" : "black" }`}
  
                        aspectRatio={1}
                        placeContent={"center"}
                        placeItems={"center"}
                        border={"1px"}
                        borderColor={`${param.pathname === "/dashboard" ? "white" : "black" }`}
                        rounded={"full"}
                      >
                        <BiHomeAlt />
                      </Box>
                                 <Box      fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'xl']}>
  Dashbord</Box>
                    </HStack>
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                                  onClick={onClose}
  
                    p="0"
                    fontSize={"md"}
                    variant={"ghost"}
                    w={"full"}
                    h={"max-content"}
                    _hover={{ bgColor: "none" }}
                  >
                    <HStack gap={4} spacing={"0px"} w={"full"}>
                      <Box
                        display={"flex"}
                        backgroundColor={`${param.pathname === "/products" ? "pink.500" : "white" }`}
                        color={`${param.pathname === "/products" ? "white" : "black" }`}
                        borderColor={`${param.pathname === "/products" ? "white" : "black" }`}
  
                        w="30px"
                        aspectRatio={1}
                        placeContent={"center"}
                        placeItems={"center"}
                        border={"1px"}
                        rounded={"full"}
                      >
                        <RiRestaurant2Line />
                      </Box>
                                 <Box      fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'xl']}>
  Products</Box>
                    </HStack>
                  </Button>
                </Link>
                <Link to="/orders">
                  <Button
                                  onClick={onClose}
  
                                    p="0"
  
                    fontSize={"md"}
                    variant={"ghost"}
                    w={"full"}
                    h={"max-content"}
                    _hover={{ bgColor: "none" }}
                  >
                    <HStack gap={4} spacing={"0px"} w={"full"}>
                      <Box
                                            backgroundColor={`${param.pathname === "/orders" ? "pink.500" : "white" }`}
                                            color={`${param.pathname === "/orders" ? "white" : "black" }`}
                                            borderColor={`${param.pathname === "/orders" ? "white" : "black" }`}
  
                        display={"flex"}
                        w="30px"
                        aspectRatio={1}
                        placeContent={"center"}
                        placeItems={"center"}
                        border={"1px"}
                        rounded={"full"}
                      >
                        <BiDish />{" "}
                      </Box>
                                 <Box      fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'xl']}>
  Orders</Box>
                    </HStack>
                  </Button>{" "}
                </Link>
                <Link to="/order-history">
                  <Button
                                  onClick={onClose}
  
                                    p="0"
  
                    fontSize={"md"}
                    variant={"ghost"}
                    w={"full"}
                    h={"max-content"}
                    _hover={{ bgColor: "none" }}
                  >
                    <HStack gap={4} spacing={"0px"} w={"full"}>
                      <Box
                        backgroundColor={`${param.pathname === "/order-history" ? "pink.500" : "white" }`}
                        color={`${param.pathname === "/order-history" ? "white" : "black" }`}
                        borderColor={`${param.pathname === "/order-history" ? "white" : "black" }`}
                        display={"flex"}
                        w="30px"
                        aspectRatio={1}
                        placeContent={"center"}
                        placeItems={"center"}
                        border={"1px"}
                        rounded={"full"}
                      >
                        <BiHistory />{" "}
                      </Box>
                                 <Box      fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'xl']}>
  Order  History</Box>
                    </HStack>
                  </Button>{" "}
                </Link>
                <Link to="/discount">
                  <Button
                                  onClick={onClose}
  
                                    p="0"
  
                    fontSize={"md"}
                    variant={"ghost"}
                    w={"full"}
                    h={"max-content"}
                    _hover={{ bgColor: "none" }}
                  >
                    <HStack gap={4} spacing={"0px"} w={"full"}>
                      <Box
                        backgroundColor={`${param.pathname === "/discount" ? "pink.500" : "white" }`}
                        color={`${param.pathname === "/discount" ? "white" : "black" }`}
                        borderColor={`${param.pathname === "/discount" ? "white" : "black" }`}
                        display={"flex"}
                        w="30px"
                        aspectRatio={1}
                        placeContent={"center"}
                        placeItems={"center"}
                        border={"1px"}
                        rounded={"full"}
                      >
                        <TbDiscount2 />{" "}
                      </Box>
                                 <Box      fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'xl']}>
  Discount</Box>
                    </HStack>
                  </Button>{" "}
                </Link>
                <Link to="/help">
                  <Button
                                  onClick={onClose}
  
                                    p="0"
  
                    fontSize={"md"}
                    variant={"ghost"}
                    w={"full"}
                    h={"max-content"}
                    _hover={{ bgColor: "none" }}
                  >
                    <HStack gap={4} spacing={"0px"} w={"full"}>
                      <Box
                        backgroundColor={`${param.pathname === "/help" ? "pink.500" : "white" }`}
                        color={`${param.pathname === "/help" ? "white" : "black" }`}
                        borderColor={`${param.pathname === "/help" ? "white" : "black" }`}
                        display={"flex"}
                        w="30px"
                        aspectRatio={1}
                        placeContent={"center"}
                        placeItems={"center"}
                        border={"1px"}
                        rounded={"full"}
                      >
                        <GiHelp />{" "}
                      </Box>
                                 <Box      fontSize={['xx-small', 'xx-small', 'xs', 'sm', 'xl']}>
  Help</Box>
                    </HStack>
                  </Button>{" "}
                </Link>
              </VStack>
          </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
  
  
  
  
  
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
  let brandColor = useColorModeValue("blue.500", "blue.400");
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
