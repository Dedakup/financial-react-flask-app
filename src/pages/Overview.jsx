import React from 'react';
import '../styles/Overview.sass'
import TotalBalance from '../components/UI/TotalBalance';
import Goals from '../components/UI/Goals';
import UpcomingBill from '../components/UI/UpcomingBill';
import Statistics from '../components/UI/Statistics';
import ExpensesBreakdown from '../components/UI/ExpensesBreakdown';

const OverviewPage = () => {
  // Логика страницы может быть здесь
  const upcomingBillsData = [
    { name: 'Figma', cycle: 'Monthly', amount: 150, lastCharge: '14 May, 2022' },
    { name: 'Adobe', cycle: 'Yearly', amount: 559, lastCharge: '17 Jun, 2023' },
    // ... другие счета ...
  ];

  const expensesData = [
    { category: 'Housing', amount: '250.00', change: '+15%' },
    { category: 'Food', amount: '350.00', change: '-8%' },
    { category: 'Transportation', amount: '50.00', change: '-12%' },
    { category: 'Entertainment', amount: '80.00', change: '-15%' },
    { category: 'Shopping', amount: '420.00', change: '+25%' },
    { category: 'Others', amount: '650.00', change: '+23%' },
    // ... другие расходы ...
  ];
  
  return (
    <>
      <main className='panelMain'>
        <div className="top-content">
          <TotalBalance />
          <Goals goal={'12000'} achieved={'8000'} />
          <UpcomingBill bills={upcomingBillsData} />
        </div>
        <Statistics />
        <ExpensesBreakdown expenses={expensesData} />
      </main >
    </>
  );
};

export default OverviewPage;
