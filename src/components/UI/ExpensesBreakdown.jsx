import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUtensils, FaCar, FaFilm, FaShoppingBag, FaEllipsisH } from 'react-icons/fa';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

// Styled-components
const ExpensesBreakdownContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
`;

const ExpenseItem = styled.div`
  padding: 10px;
  text-align: center;
  flex-basis: calc(100% / 6);
`;

const ExpenseIcon = styled.div`
  margin-bottom: 10px;
`;

const ExpenseAmount = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const ExpenseChange = styled.div`
  color: ${props => props.increase ? 'red' : 'green'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Вспомогательный компонент для отображения иконок категорий
const IconSwitch = ({ category }) => {
    const icons = {
        Housing: <FaHome />,
        Food: <FaUtensils />,
        Transportation: <FaCar />,
        Entertainment: <FaFilm />,
        Shopping: <FaShoppingBag />,
        Others: <FaEllipsisH />
    };

    return icons[category] || <FaEllipsisH />;
};

// Вспомогательный компонент для отображения изменения расходов
const ChangeIndicator = ({ change }) => {
    const isIncrease = change && change[0] === '+';
    return (
        <ExpenseChange increase={isIncrease}>
            {isIncrease ? <MdArrowDropUp color="red" /> : <MdArrowDropDown color="green" />}
            <span>{change}</span>
        </ExpenseChange>
    );
};

// Компонент для отображения одного элемента расхода
const Expense = ({ category, amount, change }) => (
    <ExpenseItem>
        <ExpenseIcon>
            <IconSwitch category={category} />
        </ExpenseIcon>
        <div>{category}</div>
        <ExpenseAmount>${amount}</ExpenseAmount>
        <ChangeIndicator change={change} />
    </ExpenseItem>
);

// Основной компонент для разбивки расходов
const ExpensesBreakdown = ({ expenses }) => (
    <ExpensesBreakdownContainer>
        {expenses.map((expense, index) => (
            <Expense
                key={index}
                category={expense.category}
                amount={expense.amount}
                change={expense.change}
            />
        ))}
    </ExpensesBreakdownContainer>
);

export default ExpensesBreakdown;
