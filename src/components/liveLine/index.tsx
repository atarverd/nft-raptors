import { useState, useEffect } from "react";
import {
	Box,
	Text,
	Avatar,
	HStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";



const LiveList = () => {

	const [data, setData] = useState([]);

	const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false";

	const getData = () => {
		fetch(url).then(res => res.json()).then(data => setData(data));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<HStack w='90%' h='50px' spacing='3%' my='1%' px='2%'  mx='10%'>
			<Swiper
				style={{
					width: "100%",
				}}
				slidesPerView={10}
				spaceBetween={10}
				modules={[Autoplay, Navigation]}
				className='mySwiper'
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
			>
				{data.map((item: any,i) => 
					(<SwiperSlide key={item.id}>
						<Box >
							<HStack>
								<Text>
									{item?.symbol}
								</Text>
								<Avatar 
									size='xs'
									name='Kola Tioluwani'
									src={item?.image}
								/>
							</HStack>
							<Text>
								${item?.current_price}
							</Text>
						</Box>
					</SwiperSlide>
					))}
			</Swiper>
		</HStack>
	);

};
export default LiveList;