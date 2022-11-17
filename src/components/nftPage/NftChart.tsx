import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type THistory = {
  date: string;
  price: number;
  prevOwner: string;
};
type TProp = {
  priceHistory: THistory[];
};

const NftChart = ({ priceHistory }: TProp) => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          data={priceHistory}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='price'
            stroke='#002D62'
            fill='#F0F8FF'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NftChart;
