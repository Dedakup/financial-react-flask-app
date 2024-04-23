import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';

// Стилизация
const StatisticsContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
`;

const StatisticsHeader = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

// Данные для примера
const data = [
    { name: '17 Sun', ThisWeek: 4000, LastWeek: 2400 },
    { name: '18 Mon', ThisWeek: 3000, LastWeek: 1398 },
    { name: '19 Tue', ThisWeek: 2000, LastWeek: 9800 },
    { name: '20 Wed', ThisWeek: 2780, LastWeek: 3908 },
    { name: '21 Thu', ThisWeek: 1890, LastWeek: 4800 },
    { name: '22 Fri', ThisWeek: 2390, LastWeek: 3800 },
    { name: '23 Sat', ThisWeek: 3490, LastWeek: 4300 },
];

// Компонент статистики
const Statistics = () => (
    <StatisticsContainer>
        <StatisticsHeader>Statistics</StatisticsHeader>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ThisWeek" fill="#8884d8" />
                <Bar dataKey="LastWeek" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    </StatisticsContainer>
);

export default Statistics;
