import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
{
    date: 'Nov 1',
    price:150
},
{
    date: 'Nov 2',
    price:154
    },
    {
    date: 'Nov 3',
    price:110
    },
    {
    date: 'Nov 5',
    price:180
    },
    {
    date: 'Nov 8',
    price:210
    },
    {
    date: 'Nov 10',
    price:120
    },

];
const NftChart = () => {
    return (
        <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
            <AreaChart
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="price" stroke="#002D62" fill="#F0F8FF" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
}

export default NftChart