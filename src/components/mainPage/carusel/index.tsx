import "swiper/css";
import { Image, Flex, Center, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { db } from "../../../firebase-config";
import { getDocs, collection, query, limit } from "firebase/firestore";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

type TCarousel={
	img:string;
	id:string;
}
const Carusel = () => {

	const [carouselImg, setCarouselImg] = useState<TCarousel[]>([]);

	const carousel = async () => {
		const q = query(collection(db, "collections"), limit(10));
		const querySnapShot = await getDocs(q);
		const result: TCarousel[] = [];
		querySnapShot.forEach((doc) => {
			result.push({
				id: doc.id,
				img: doc.data().feature
			});
		});
		setCarouselImg(result);
	};

	useEffect(() => {
		carousel();
	}, []);

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
					{carouselImg.map((item) => (
						<SwiperSlide key={item.id}>
							<Box backgroundImage={`url(${item.img})`} 
								cursor="pointer"
								borderRadius="15px"
								w={["70px","130px","170px","230px","330px"]} 
								h={["70px","130px","170px","230px","330px"]}
								bgPosition="center"
								bgRepeat="no-repeat" 
								objectFit='fill' 
								
								backgroundSize='cover'
							></Box>
							{/* <Image
								cursor='pointer'
								borderRadius='15px'
								w={["100px","200px","300px"]}
								w={["100px","200px","300px"]}
								src={item?.img}
							/> */}
						</SwiperSlide>
					))}
				</Swiper>
			</Flex>
		</>
	);
};
export default Carusel;
