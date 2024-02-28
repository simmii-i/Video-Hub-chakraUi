import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3 (1).jpg";
import img4 from "../assets/4 (1).jpg";
import img5 from "../assets/5.png";
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";

const headingOptions = {
    pos:'absolute',
    left : '50%',
    top : '10%',
    transform:'translation(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'xl',
    borderRadius:'8'
}

const Home = () => {
    return <Box>
        
        <MyCarousel/>

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >Services</Heading>

        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']} >

        <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} /> 
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis elit elit, id laoreet dolor malesuada nec. Sed et tellus augue. Proin nec turpis convallis, vestibulum mi quis, imperdiet risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer aliquam a tortor eu malesuada. Aenean sodales id quam ut molestie. Praesent elementum orci ut molestie convallis. Sed tempor sollicitudin pulvinar. Nam ut dui neque. Sed venenatis vitae tortor et pulvinar. Suspendisse ullamcorper odio et efficitur eleifend. Nullam suscipit gravida semper. Morbi ac mattis enim, in posuere ex. Nullam semper ullamcorper purus. Etiam id blandit ante, eget facilisis tortor. In tempor tincidunt ipsum, at tincidunt lectus.
        </Text>
        </Stack>

        </Container>
    </Box>

}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}> Watch The future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}> Future is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}> Gaming on Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Night is all about coding... </Heading>
        </Box>
    </Carousel>
)
export default Home;