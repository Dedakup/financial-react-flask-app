import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout.jsx';
import WelcomePage from './pages/Welcome.jsx';
import SignupPage from './pages/signup.jsx';
import LoginPage from './pages/login.jsx';
import Forgot_passwordPage from './pages/Forgot_password.jsx';
import OverviewPage from './pages/Overview.jsx';
import BalancesPage from './pages/Balances.jsx';
import Balance_detailsPage from './pages/Balance_details.jsx';
import BillsPage from './pages/Bills.jsx';
import ExpensesPage from './pages/Expenses.jsx';
import GoalsPage from './pages/Goals.jsx';
import SettingsPage from './pages/Setting.jsx';
import './styles/app.sass';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Страницы без Layout */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password " element={<Forgot_passwordPage />} />
          <Route path="/" element={<WelcomePage />} />

          {/* Страницы с Layout */}
          <Route path="/overview" element={<Layout showGreeting={true}><OverviewPage /></Layout>} />
          <Route path="/balances" element={<Layout><BalancesPage /></Layout>} />
          <Route path="/balance-details" element={<Layout><Balance_detailsPage /></Layout>} />
          <Route path="/bills" element={<Layout><BillsPage /></Layout>} />
          <Route path="/expenses" element={<Layout><ExpensesPage /></Layout>} />
          <Route path="/goals" element={<Layout><GoalsPage /></Layout>} />
          <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
