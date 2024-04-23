// routes.js
import React from 'react';
import Layout from './components/Layout.jsx';
import { Route } from 'react-router-dom';
import WelcomePage from './pages/Welcome.jsx';
import SignupPage from './pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import ForgotPasswordPage from './pages/ForgotPassword.jsx';
import OverviewPage from './pages/Overview.jsx';
import BalancesPage from './pages/Balances.jsx';
import BalanceDetailsPage from './pages/BalanceDetails.jsx';
import BillsPage from './pages/Bills.jsx';
import ExpensesPage from './pages/Expenses.jsx';
import GoalsPage from './pages/Goals.jsx';
import SettingsPage from './pages/Setting.jsx';

const routes = (
    <React.Fragment>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />


        <Route path="/overview" element={<Layout><OverviewPage /></Layout>} />
        <Route path="/balances" element={<Layout><BalancesPage /></Layout>} />
        <Route path="/balance-details" element={<Layout><BalanceDetailsPage /></Layout>} />
        <Route path="/bills" element={<Layout><BillsPage /></Layout>} />
        <Route path="/expenses" element={<Layout><ExpensesPage /></Layout>} />
        <Route path="/goals" element={<Layout><GoalsPage /></Layout>} />
        <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
    </React.Fragment>
);

export default routes;
