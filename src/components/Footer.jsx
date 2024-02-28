import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillYoutube, AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'whitr'}>
    <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'} textAlign={['center','left']}>
            <Heading size={'md'} color={'white'} textTransform={'uppercase'} >
                Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
                 <Input textColor={'white'} placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                <Button p={'0'} colorScheme='pink' variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>
        </VStack>

        <VStack textColor={'white'} w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading  textAlign={'center'} textTransform={'uppercase'}>Video Hub</Heading>
             
             <Text >All rights reserved</Text>
        </VStack>
        <VStack textColor={'white'} w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'} >Social media</Heading>
            <Button variant={'link'} colorScheme='pink'>
                <a href='https://youtube.com'>
                   YouTube
                </a>
            </Button>
            <Button variant={'link'} colorScheme='pink'>
                <a href='https://instagram.com'>
                   Instagram
                </a>
            </Button>
            <Button variant={'link'} colorScheme='pink'>
                <a href='https://github.com'>
                   Github
                </a>
            </Button>
        </VStack>
    </Stack>

    </Box>
  );
};

export default Footer