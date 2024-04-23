// Goals.jsx

import React from 'react';
import styled from 'styled-components';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Styled components for the goals
const GoalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const SavingsGoalContainer = styled.div`
  width: 45%;
  text-align: center;
`;

const SavingSummaryContainer = styled.div`
  width: 50%;
`;

const GoalLegend = styled(Legend)`
  align-self: center;
`;

// Mock data for RadialBarChart
const goalData = [
    {
        name: 'Target Achieved',
        value: 12500,
        fill: '#8884d8',
    },
    {
        name: 'Target',
        value: 20000 - 12500, // Rest of the target
        fill: '#82ca9d',
    },
];

// Mock data for LineChart
const summaryData = [
    { name: 'May 01', thisMonth: 400, lastMonth: 240 },
    { name: 'May 05', thisMonth: 300, lastMonth: 138 },
    // ... more data
];

const renderLegend = (props) => {
    const { payload } = props;
    return (
        <ul>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: entry.color }}>
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

const Goals = () => (
    <GoalsContainer>
        <SavingsGoalContainer>
            <h3>Savings Goal</h3>
            <p>01 May ~ 31 May</p>
            <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart
                    innerRadius="10%"
                    outerRadius="80%"
                    data={goalData}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey='value' />
                    <GoalLegend iconSize={10} layout='vertical' verticalAlign='middle' wrapperStyle={styled.legendWrapper} content={renderLegend} />
                </RadialBarChart>
            </ResponsiveContainer>
            <button>Adjust Goal</button>
        </SavingsGoalContainer>
        <SavingSummaryContainer>
            <h3>Saving Summary</h3>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={summaryData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="thisMonth" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="lastMonth" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </SavingSummaryContainer>
    </GoalsContainer>
);

export default Goals;
