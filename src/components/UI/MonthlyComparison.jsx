// MonthlyComparison.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const MonthlyComparisonContainer = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const MonthlyComparison = ({ data }) => (
    <MonthlyComparisonContainer>
        {/* Заголовок и переключатель можно добавить здесь */}
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ThisWeek" fill="#8884d8" />
                <Bar dataKey="LastWeek" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    </MonthlyComparisonContainer>
);

export default MonthlyComparison;
