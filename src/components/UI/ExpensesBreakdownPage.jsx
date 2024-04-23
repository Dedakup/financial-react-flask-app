// ExpensesBreakdown.jsx

import React from 'react';
import styled from 'styled-components';

const ExpensesBreakdownContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CategoryCard = styled.div`
  flex-basis: calc(50% - 10px);
  margin-bottom: 20px;
  /* Добавьте сюда стили для карточки */
`;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  /* Добавьте сюда стили для элементов списка */
`;

// Допустим, у вас есть компонент Icon, который возвращает соответствующий SVG или изображение.
const Icon = styled.img`
  /* Стили для иконки */
`;

const ExpensesBreakdown = ({ categories }) => (
    <ExpensesBreakdownContainer>
        <CategoryContainer>
            {categories.map((category, index) => (
                <CategoryCard key={index}>
                    <Icon src={category.icon} alt={`${category.name} icon`} />
                    <h3>{category.name}</h3>
                    <p>${category.totalAmount}</p>
                    {/* Процентное изменение и кнопка сравнения можно добавить здесь */}
                    <TransactionList>
                        {category.transactions.map((transaction, i) => (
                            <TransactionItem key={i}>
                                <span>{transaction.name}</span>
                                <span>${transaction.amount}</span>
                            </TransactionItem>
                        ))}
                    </TransactionList>
                </CategoryCard>
            ))}
        </CategoryContainer>
    </ExpensesBreakdownContainer>
);

export default ExpensesBreakdown;
