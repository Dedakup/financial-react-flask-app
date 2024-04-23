import React from 'react';
import AccountDetails from '../components/UI/AccountDetails';
// Импортируйте любые компоненты, которые вы хотите использовать на странице
// Например: import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const accountDetailsData = {
  bankName: 'AB Bank Ltd.',
  accountType: 'Checking',
  balance: '$25,056.00',
  branchName: 'Park Street Branch',
  accountNumber: '133 456 886 ****'
};

const BalanceDetailsPage = () => {
  // Логика страницы может быть здесь

  return (
    <div>
      <main className='panelMain'>
        <AccountDetails details={accountDetailsData} />
      </main>
    </div>
  );
};

export default BalanceDetailsPage;
