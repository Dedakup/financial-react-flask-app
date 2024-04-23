import React from 'react';
import Balances from '../components/UI/Balanses'

const accountsData = [
  { accountType: 'Credit Card', bankName: 'Master Card', accountNumber: '3388 4556 8860 ****', totalAmount: '25000' },
  { accountType: 'Checking', bankName: 'AB Bank Ltd VISA', accountNumber: '693 456 69 ****', totalAmount: '25000' },
  { accountType: 'Savings', bankName: 'Brac Bank Ltd.', accountNumber: '133 456 886 ****', totalAmount: '25000' },
  // ... другие счета ...
];

const BalancesPage = () => {
  // Логика страницы может быть здесь

  return (
    <div>
      <main className='panelMain'>
        <Balances accounts={accountsData} />
      </main>
    </div>
  );
};

export default BalancesPage;
