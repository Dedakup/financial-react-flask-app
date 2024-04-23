import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styled components
const BalancesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
`;

const AccountCardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 280px;
`;

const AccountType = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const AccountNumber = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
`;

const TotalAmount = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  border: none;
  background: transparent;
  color: #007bff;
  cursor: pointer;
  padding: 5px;
  margin-right: 10px;
`;

// Компонент карточки счета
const AccountCard = ({ accountType, bankName, accountNumber, totalAmount }) => (
    <AccountCardContainer>
        <AccountType>{accountType}</AccountType>
        <div>{bankName}</div>
        <AccountNumber>{accountNumber}</AccountNumber>
        <TotalAmount>${totalAmount}</TotalAmount>
        <ActionButton>Remove</ActionButton>
        <Link to='/balance-details'>Details</Link>
    </AccountCardContainer>
);

// Контейнер для всех балансов
const Balances = ({ accounts }) => (
    <BalancesContainer>
        {accounts.map((account, index) => (
            <AccountCard
                key={index}
                accountType={account.accountType}
                bankName={account.bankName}
                accountNumber={account.accountNumber}
                totalAmount={account.totalAmount}
            />
        ))}
        <AccountCardContainer as="button">
            Add Accounts
        </AccountCardContainer>
        <AccountCardContainer as="button">
            Edit Accounts
        </AccountCardContainer>
    </BalancesContainer>
);

export default Balances;
