import React from 'react';
import styled from 'styled-components';

// Styled-components для стилизации
const UpcomingBillContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 352px; 
`;

const UpcomingBillHeader = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const BillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BillItem = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BillInfo = styled.div`
  & > p {
    margin: 0;
    color: #666;
    font-size: 0.9em;
  }

  & > p:first-child {
    color: #333;
    font-size: 1em;
    font-weight: 500;
  }
`;

const BillAmount = styled.span`
  font-weight: bold;
  color: #333;
`;

// Компонент для отображения одного предстоящего счета
const Bill = ({ name, cycle, amount, lastCharge }) => (
    <BillItem>
        <BillInfo>
            <p>{`${name} - ${cycle}`}</p>
            <p>Last Charge - {lastCharge}</p>
        </BillInfo>
        <BillAmount>${amount}</BillAmount>
    </BillItem>
);

// Основной компонент для предстоящих счетов
const UpcomingBill = ({ bills }) => (
    <UpcomingBillContainer>
        <UpcomingBillHeader>Upcoming Bill</UpcomingBillHeader>
        <BillList>
            {bills.map((bill, index) => (
                <Bill
                    key={index}
                    name={bill.name}
                    cycle={bill.cycle}
                    amount={bill.amount}
                    lastCharge={bill.lastCharge}
                />
            ))}
        </BillList>
    </UpcomingBillContainer>
);

export default UpcomingBill;
