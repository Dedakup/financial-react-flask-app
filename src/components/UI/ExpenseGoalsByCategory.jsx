import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUtensils, FaCar, FaGamepad, FaShoppingBag, FaEllipsisH, FaPencilAlt } from 'react-icons/fa';

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f9f9f9;
  padding: 20px;
`;

const CategoryCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  flex-basis: calc(33.333% - 20px);
  margin-bottom: 20px;
`;

const CategoryName = styled.h3`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;

const Amount = styled.div`
  font-size: 1.5em;
  margin: 20px 0;
  color: #333;
`;

const AdjustButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
`;

// Add additional icons as needed
const iconComponents = {
    Housing: FaHome,
    Food: FaUtensils,
    Transportation: FaCar,
    Entertainment: FaGamepad,
    Shopping: FaShoppingBag,
    Others: FaEllipsisH
};

const CategoryIcon = ({ categoryName }) => {
    const IconComponent = iconComponents[categoryName] || FaEllipsisH;
    return (
        <IconWrapper>
            <IconComponent />
        </IconWrapper>
    );
};

const ExpenseGoalsByCategory = ({ categories }) => {
    return (
        <CategoriesContainer>
            {categories.map((category, index) => (
                <CategoryCard key={index}>
                    <CategoryName>
                        <CategoryIcon categoryName={category.name} />
                        {category.name}
                    </CategoryName>
                    <Amount>${category.amount}</Amount>
                    <AdjustButton>
                        <FaPencilAlt /> Adjust
                    </AdjustButton>
                </CategoryCard>
            ))}
        </CategoriesContainer>
    );
};

export default ExpenseGoalsByCategory;
