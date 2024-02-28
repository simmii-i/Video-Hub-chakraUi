import React from 'react'
import  { Drawer, DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
   <>
    <Button onClick={onOpen}
    pos={"fixed"}
    left={'4'}
    colorScheme="pink"
    p={'0'} 
    h={'10'}
    w={'10'}
    borderRadius={"full"}
    zIndex={'overlay'}
    >
    <BiMenuAltLeft size={'20'} />
    
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
     <DrawerOverlay/>

     <DrawerContent>
     <DrawerCloseButton/>
     <DrawerHeader>Video Hub</DrawerHeader>
      <DrawerBody>
        <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
                <Link to={'/'} >Home</Link>
                       
            </Button>

            <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
                <Link to={'/videos'} >Video</Link>
                       
            </Button>

            <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
                <Link to={'/videos?category=free'} >Free videos</Link>
                       
            </Button>

            <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
                <Link to={'/upload'} >Upload Video</Link>
                       
            </Button>
        </VStack>

        <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme='pink'>
                <Link to={'/login'}>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme='pink' variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
        </HStack>
      </DrawerBody>
     </DrawerContent>
    </Drawer>
   </>
  )
}

export default Header