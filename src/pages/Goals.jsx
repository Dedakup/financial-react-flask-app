import React from 'react';
import Goals from '../components/UI/GoalsTop';
import ExpenseGoalsByCategory from '../components/UI/ExpenseGoalsByCategory';

const categories = [
  { name: 'Housing', amount: 250.00 },
  { name: 'Food', amount: 250.00 },
  // ... other categories
];

const GoalsPage = () => {
  // Логика страницы может быть здесь

  return (
    <div>
      <main className='panelMain'>
        <Goals />
        <ExpenseGoalsByCategory categories={categories} />
      </main>
    </div>
  );
};

export default GoalsPage;
