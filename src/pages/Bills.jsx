import React from 'react';
import UpcomingBills from '../components/UI/UpcomingBills';

const upcomingBillsData = [
  {
    dueDate: 'May 15',
    itemName: 'Figma - Yearly Plan',
    description: 'For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.',
    lastCharge: '14 May, 2022',
    amount: '150'
  },
  {
    dueDate: 'Jun 16',
    itemName: 'Adobe Inc - Yearly Plan',
    description: 'For advanced security and more flexible controls, the Professional plan helps you scale design processes company-wide.',
    lastCharge: '17 Jun, 2022',
    amount: '559'
  }
];

const BillsPage = () => {
  // Логика страницы может быть здесь

  return (
    <div>
      <main className='panelMain'>
        <UpcomingBills bills={upcomingBillsData} />
      </main>
    </div>
  );
};

export default BillsPage;
