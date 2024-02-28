import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
 
  const videosArr = [
    'link1','link2','link3','link4','link5','link6','link7'
  ];
  
  
  return (
    <Stack direction={['column','row']} h={'100vh'}  >
      <VStack w={'full'} >
      <video src='https://youtu.be/XALBGkjkUPQ?si=uCETqHPRkfDhhvtQ' controls controlsList='nodownload' style={{
        width:'100%',
      }} ></video>

     <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflow={'auto'} >
        <Heading> Sample Videos </Heading>
        <Text  >Description of the video..        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis elit elit, id laoreet dolor malesuada nec. Sed et tellus augue. Proin nec turpis convallis, vestibulum mi quis, imperdiet risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer aliquam a tortor eu malesuada. 
</Text>  
      </VStack>

      </VStack>


      <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} overflow={'auto'} >
            {
           videosArr.map((item,index) => (
            <Button variant={'ghost'} colorScheme='pink' >
              Lecture {index +1}
            </Button>
           ))
            }   
      </VStack>
    </Stack>
  )
}

export default Videos