import React from 'react';
import styled from 'styled-components';

// Styled components
const BillsContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;

const BillHeader = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
`;

const BillTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-top: 1px solid #ddd;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;

const TableHeader = styled.th`
  padding: 10px 0;
  color: #666;
`;

const TableCell = styled.td`
  padding: 10px 0;
  color: #666;
  &.amount {
    font-weight: bold;
    color: #333;
  }
`;

// Замените это на компоненты для реальных логотипов
const LogoPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 50%;
  display: inline-block;
`;

const UpcomingBills = ({ bills }) => (
    <BillsContainer>
        <BillHeader>Upcoming Bills</BillHeader>
        <BillTable>
            <thead>
                <TableRow>
                    <TableHeader>Due Date</TableHeader>
                    <TableHeader>Logo</TableHeader>
                    <TableHeader>Item Description</TableHeader>
                    <TableHeader>Last Charge</TableHeader>
                    <TableHeader>Amount</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {bills.map((bill, index) => (
                    <TableRow key={index}>
                        <TableCell>{bill.dueDate}</TableCell>
                        <TableCell><LogoPlaceholder /></TableCell> {/* Замените на реальное изображение логотипа */}
                        <TableCell>
                            <strong>{bill.itemName}</strong>
                            <div>{bill.description}</div>
                        </TableCell>
                        <TableCell>{bill.lastCharge}</TableCell>
                        <TableCell className="amount">${bill.amount}</TableCell>
                    </TableRow>
                ))}
            </tbody>
        </BillTable>
    </BillsContainer>
);

export default UpcomingBills;
