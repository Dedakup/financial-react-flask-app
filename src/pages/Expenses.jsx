import React from 'react';
import MonthlyComparison from '../components/UI/MonthlyComparison';
import ExpensesBreakdown from '../components/UI/ExpensesBreakdownPage';

const categoriesData = [
  {
    name: 'Housing',
    totalAmount: 250.00,
    icon: '/path/to/housing/icon',
    transactions: [
      { name: 'House Rent', amount: 230.00 },
      { name: 'Parking', amount: 20.00 }
    ],
    // ...
  },
  {
    name: 'Food',
    totalAmount: 350.00,
    icon: '/path/to/food/icon',
    transactions: [
      { name: 'Grocery', amount: 230.00 },
      { name: 'Restaurant bill', amount: 120.00 }
    ],
    // ...
  },
  // Другие категории...
];

const ExpensesPage = () => {
  // Логика страницы может быть здесь

  return (
    <div>
      <main className='panelMain'>
        <ExpensesBreakdown categories={categoriesData} />
        <MonthlyComparison data={categoriesData} />
      </main>
    </div>
  );
};

export default ExpensesPage;
