import { useState, useEffect } from "react";
import {
	Box,
	Text,
	Avatar,
	HStack,
} from "@chakra-ui/react";

const LiveList = () => {

	const [data, setData] = useState([]);

	const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false";

	const getData = () => {
		fetch(url).then(res => res.json()).then(data => setData(data));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<HStack w='full' h='50px' spacing='3%' my='1%' px='2%'>
			{data.map((item: any,i) => 
			
				(<Box key={i}>
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
						{item?.current_price}
					</Text>
				</Box>
				))}
		</HStack>
	);

};
export default LiveList;