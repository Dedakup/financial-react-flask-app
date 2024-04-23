import React from 'react';
import styled from 'styled-components';

const GoalsContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 352px;
`;

const GoalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const GoalAmount = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const MonthDisplay = styled.span`
  font-weight: bold;
  font-size: 1em;
`;

const GoalsInfo = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const GoalDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const GoalLabel = styled.span`
  font-weight: bold;
`;

const GoalValue = styled.span`
  font-weight: bold;
`;

const GoalProgress = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 20px 0;
`;

const ProgressIndicator = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 10px;
  background-color: #81c784;
  width: ${(props) => props.percentage}%;
`;

// Компонент Goal
const Goals = ({ goal, achieved }) => {
    const percentage = (achieved / goal) * 100;

    return (
        <GoalsContainer>
            <GoalsHeader>
                <GoalAmount>${goal.toLocaleString()}</GoalAmount>
                <EditButton>
                    {/* Иконка карандаша для редактирования цели */}
                </EditButton>
                <MonthDisplay>May, 2023</MonthDisplay>
            </GoalsHeader>
            <GoalsInfo>
                <GoalDetail>
                    <GoalLabel>Target Achieved</GoalLabel>
                    <GoalValue>${achieved.toLocaleString()}</GoalValue>
                </GoalDetail>
                <GoalProgress>
                    <ProgressIndicator percentage={percentage} />
                </GoalProgress>
                <GoalDetail>
                    <GoalLabel>This month Target</GoalLabel>
                    <GoalValue>${goal.toLocaleString()}</GoalValue>
                </GoalDetail>
            </GoalsInfo>
        </GoalsContainer>
    );
};

export default Goals;
