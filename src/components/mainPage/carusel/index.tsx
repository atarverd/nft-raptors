import 'swiper/css';
import { Flex, Center, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { TypeAnimation } from 'react-type-animation';
import useCollectionRequest from '../../../hooks/useCollectionRequest';


const Carusel = () => {

	const carouselImg = useCollectionRequest('carousel', '');

	return (
		<>
			<Center mb='2rem'>
				<TypeAnimation
					sequence={[
						'In NFT We Trust', // Types 'One'
						1500, // Waits 1s

						'',
						1500,
					]}
					wrapper='div'
					speed={20}
					cursor={true}
					repeat={Infinity}
					style={{ fontSize: '1.5em', fontStyle: 'bold' }}
				/>
			</Center>
			<Flex align='center' justify='center' m='2rem' h={['100px', '150px', '200px', '250px', '300px']}>
				<Swiper
					style={{
						width: '100%',
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
							<Box backgroundImage={`url(${item.feature})`}
								cursor='pointer'
								borderRadius='15px'
								w={['70px', '130px', '170px', '230px', '300px']}
								h={['70px', '130px', '170px', '230px', '300px']}
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
