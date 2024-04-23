import React from 'react';
import styled from 'styled-components';

// Styled components
const AccountDetailsContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

const DetailValue = styled.span`
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#28a745' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#007bff'};
  padding: 10px 15px;
  border: ${props => props.primary ? 'none' : '1px solid #007bff'};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 0.9em;
`;

// Компонент для деталей счета
const AccountDetails = ({ details }) => (
    <AccountDetailsContainer>
        <DetailRow>
            <DetailLabel>Bank Name</DetailLabel>
            <DetailValue>{details.bankName}</DetailValue>
        </DetailRow>
        <DetailRow>
            <DetailLabel>Account Type</DetailLabel>
            <DetailValue>{details.accountType}</DetailValue>
        </DetailRow>
        <DetailRow>
            <DetailLabel>Balance</DetailLabel>
            <DetailValue>{details.balance}</DetailValue>
        </DetailRow>
        <DetailRow>
            <DetailLabel>Branch Name</DetailLabel>
            <DetailValue>{details.branchName}</DetailValue>
        </DetailRow>
        <DetailRow>
            <DetailLabel>Account Number</DetailLabel>
            <DetailValue>{details.accountNumber}</DetailValue>
        </DetailRow>
        <ButtonGroup>
            <Button primary>Edit Details</Button>
            <Button>Remove</Button>
        </ButtonGroup>
    </AccountDetailsContainer>
);

export default AccountDetails;
