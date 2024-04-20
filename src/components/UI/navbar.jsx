import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem.jsx';
import '../../styles/navbar.sass';
import LogoutButton from './LogoutButton.jsx';
import UserProfileButton from './UserProfileButton.jsx';
import { ReactComponent as OverviewIcon } from '../../assets/icons/Menu/Overviewoverview.svg';
import { ReactComponent as BalancesIcon } from '../../assets/icons/Menu/wallet.svg';
import { ReactComponent as BillsIcon } from '../../assets/icons/Menu/Bill.svg';
import { ReactComponent as ExpensesIcon } from '../../assets/icons/Menu/Expencces.svg';
import { ReactComponent as GoalsIcon } from '../../assets/icons/Menu/Goal.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/Menu/Settings.svg';
import LogoutIcon from '../../assets/icons/Menu/Logout.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">BudgetBuddy</Link>
            <div className="navbar-main">
                <ul className="navbar-nav">
                    <NavItem to="/overview" icon={OverviewIcon}>Overview</NavItem>
                    <NavItem to="/balances" icon={BalancesIcon}>Balances</NavItem>
                    <NavItem to="/bills" icon={BillsIcon}>Bills</NavItem>
                    <NavItem to="/expenses" icon={ExpensesIcon}>Expenses</NavItem>
                    <NavItem to="/goals" icon={GoalsIcon}>Goals</NavItem>
                    <NavItem to="/settings" icon={SettingsIcon}>Settings</NavItem>
                </ul>
            </div>
            <div className="navbar-footer">
                <LogoutButton logo={LogoutIcon} />
                <UserProfileButton username={'User'} profilePhoto={require('../../assets/images/User.png')} />
            </div>
        </nav>
    );
};

export default Navbar;
