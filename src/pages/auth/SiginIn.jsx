
import React,{useState} from "react";

import { Link, useNavigate } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
// Assets
// import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import AuthIllustration from "../Layouts/AuthLayout";
import { useDispatch } from "react-redux";
function SignIn() {
  const [email, setEmail] = useState("");  // <-- Default values HERE
  const [password, setPassword] = useState("");       // <-- Default values HERE
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Sign in");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (event) => {
    event.preventDefault();
    setButtonText("Sigining In");
    dispatch({type: 'login'});
    navigate('/');
    setButtonText("Sign in");

  };
  return (
    <AuthIllustration illustrationBackground={'https://images.pexels.com/photos/16108218/pexels-photo-16108218/free-photo-of-food-healthy-sea-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading  fontSize='36px' mb='10px'>
            Sign IN
          </Heading>
          <Text
            mb='36px'
            ms='4px'
           
            fontWeight='400'
            fontSize='md'>
            please login
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
         <form onSubmit={login}>

          <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
            <h4
              style={{
                fontSize: ".9em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
              }}
            >
              {error}
            </h4>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
             
              mb='8px'>
              Email<Text color={'blue'}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='mail@simmmple.com'
              mb='24px'
              defaultValue={email}
              fontWeight='500'
              size='lg'
              onChange={(event) => {
                setEmail(event.target.value);
                setError(undefined);
              }}
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              display='flex'>
              Password<Text color={'blue'}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                defaultValue={password}
                type={show ? "text" : "password"}
                variant='auth'
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError(undefined);
                }}
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              fontSize='sm'
              fontWeight='500'
              w='100%'
              colorScheme = "blue"
              h='50'
              mb='24px'
              type= "submit"
             >
              Sign In
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            <Text color={'blue'} fontWeight='400' fontSize='14px'>
              Not registered yet?
              <Link to='sign-up'>
                <Text
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Create an Account
                </Text>
              </Link>
            </Text>
          </Flex>
        </Flex>
        </form>

      </Flex>
      </Flex>
    </AuthIllustration>
   
  );
}

export default SignIn;
