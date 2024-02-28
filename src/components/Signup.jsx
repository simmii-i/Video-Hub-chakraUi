import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Gaming Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />

            <Input
              placeholder="Name"
              type="text"
              required
              focusBorderColor="purple.500"
            ></Input>
             
             <Input
              placeholder="email"
              type="email"
              required
              focusBorderColor="purple.500"
            ></Input>
  
            <Input
              placeholder="password"
              type="pasword"
              required
              focusBorderColor="purple.500"
            ></Input>
  
           
  
            <Button colorScheme="pink" type="submit">
              Sign Up
            </Button>
            <Text textAlign={'right'}>
              Already Signed Up? {'  '}
              <Button variant={'link'} colorScheme="pink">
                <Link to={'/login'}>Log In  </Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
 
  
export default Signup