import {
	Area,
	XAxis,
	YAxis,
	Tooltip,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';
import React from 'react';
import { TPriceHistory } from '../../types/nft.types';

type TProp = {
	priceHistory: TPriceHistory[];
};

const NftChart = ({ priceHistory }: TProp) => {
	priceHistory = priceHistory.map((item) => { item.price = Number(item.price); return item; });
	return (

		<div style={{ width: '100%', height: 300 }}>
			<ResponsiveContainer>
				<AreaChart
					data={priceHistory}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis />
					<YAxis />
					<Tooltip />
					<Area type='monotone' dataKey='price' stroke='#8884d8' fill='#8884d8' />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default NftChart;
