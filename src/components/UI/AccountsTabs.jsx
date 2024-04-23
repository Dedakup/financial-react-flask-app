import React, { useState } from 'react';
import styled from 'styled-components';
import UserProfile from './SettingsUserProfile';
import UserSecurity from './SettingsUserSecurity';

// Styled components
const TabsContainer = styled.div`
  background: #f9f9f9;
  padding: 20px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #333' : 'none')};
  cursor: pointer;
`;

const AccountTabs = () => {
    const [activeTab, setActiveTab] = useState('account');

    return (
        <TabsContainer>
            <Tab isActive={activeTab === 'account'} onClick={() => setActiveTab('account')}>
                Account
            </Tab>
            <Tab isActive={activeTab === 'security'} onClick={() => setActiveTab('security')}>
                Security
            </Tab>

            {activeTab === 'account' && <UserProfile />}
            {activeTab === 'security' && <UserSecurity />}
        </TabsContainer>
    );
};

export default AccountTabs;
