import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, icon: Icon, children }) => {
  const location = useLocation();

  // Проверяем, активен ли текущий элемент меню
  const isActive = location.pathname === to;

  // Класс для стилизации активного элемента
  const activeClass = isActive ? "active" : "";

  return (
    <li className={`nav-item ${activeClass}`}>
      <Link className="nav-link" to={to}>
        {Icon && <Icon className="nav-icon" />}
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
