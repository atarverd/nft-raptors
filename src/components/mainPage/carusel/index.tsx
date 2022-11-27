import { Slide, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Image, Flex, Center, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Caruselm = () => {
  return (
    <>
      <Center mb='2rem'>
        <TypeAnimation
          sequence={[
            "Small things make perfection, but", // Types 'One'
            1500, // Waits 1s

            "Small things make perfection, but perfection is no small thing.",
            1500,
          ]}
          wrapper='div'
          speed={20}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.5em", fontStyle: "bold" }}
        />
      </Center>
      <Flex align='center' justify='center' m='2rem'>
        <Swiper
          style={{
            width: "100%",
          }}
          slidesPerView={4}
          spaceBetween={30}
          modules={[Autoplay, Navigation]}
          className='mySwiper'
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/aryamularama%20homecard%20squooshed.jpg?auto=format&w=828'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/clay%20friends%20homecard.png?auto=format&w=828'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/10KTF%20homecard.png?auto=format&w=828'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/fragile%20animals%20homecard%20squooshed.jpg?auto=format&w=828'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/drip%20ballers%20homecard.png?auto=format&w=828'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/files/c6af7968009d1f4d88f82a02eea30cee.png?auto=format&w=828'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/shabangrs%20homecard.png?auto=format&w=828'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              cursor='pointer'
              borderRadius='15px'
              // h='300px'
              src='https://i.seadn.io/gcs/static/promocards/oma%20oma%20homecard%20squooshed.jpg?auto=format&w=828'
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
};
export default Caruselm;
