import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { TypeAnimation } from "react-type-animation";
import { Flex, Center, Box } from "@chakra-ui/react";
import useCollectionRequest from "../../../hooks/useCollectionRequest";

const Carusel = () => {
  const carouselImg = useCollectionRequest("carousel");
  const navigate = useNavigate();

  return (
    <>
      <Center mb='2rem'>
        <TypeAnimation
          sequence={[
            "In NFT We Trust", // Types 'One'
            1500, // Waits 1s

            "",
            1500,
          ]}
          wrapper='div'
          speed={20}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "20px", fontStyle: "bold" }}
        />
      </Center>
      <Flex
        align='center'
        justify='center'
        m='2rem'
        h={["100px", "150px", "200px", "250px", "300px"]}
      >
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
          {carouselImg.map((item, i) => (
            <SwiperSlide key={i}>
              <Box
                backgroundImage={`url(${item.feature})`}
                onClick={() => navigate("/collection/" + item.id)}
                cursor='pointer'
                borderRadius='15px'
                w={["70px", "130px", "170px", "230px", "300px"]}
                h={["70px", "130px", "170px", "230px", "300px"]}
                bgPosition='center'
                bgRepeat='no-repeat'
                objectFit='fill'
                backgroundSize='cover'
              ></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
};
export default Carusel;
