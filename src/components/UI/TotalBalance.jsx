import React from 'react';
import styled from 'styled-components';

// Styled components for styling
const TotalBalanceContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 352px;
`;

const BalanceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BalanceAmount = styled.div`
  font-size: 2em;
  color: #333;
`;

const AllAccountsButton = styled.button`
  background: #f5f5f5;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`;

const AccountDetails = styled.div`
  background: #e8f5e9;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountInfo = styled.div`
  font-weight: bold;
`;

const AccountBalance = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #333;
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => props.isNegative ? '#e57373' : '#81c784'};
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#333' : '#ddd'};
  margin: 0 5px;
  cursor: pointer;
`;

// TotalBalance component
const TotalBalance = () => {
  return (
    <TotalBalanceContainer>
      <BalanceHeader>
        <BalanceAmount>$240,399</BalanceAmount>
        <AllAccountsButton>All Accounts</AllAccountsButton>
      </BalanceHeader>
      <AccountDetails>
        <AccountInfo>
          Account Type<br />
          Credit Card<br />
          **** **** **** 2598
        </AccountInfo>
        <AccountBalance>
          <Indicator isNegative={true} />
          $25000
        </AccountBalance>
      </AccountDetails>
      <NavigationDots>
        <button>{"<"}</button>
        <Dot active />
        <Dot />
        <Dot />
        <button>{">"}</button>
      </NavigationDots>
    </TotalBalanceContainer>
  );
};

export default TotalBalance;
