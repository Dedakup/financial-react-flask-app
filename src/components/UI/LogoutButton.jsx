import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../styles/logout-button.sass';// Импорт useNavigate для react-router v6+

const LogoutButton = ({ logo }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Ваша логика выхода из системы
        //logoutFunction();
        // Перенаправить пользователя на страницу входа или на главную
        navigate('/login');
    };

    return (
        <div className="logout-button-container">
            {logo && <img src={logo} alt="Logo" className="logout-logo" />}
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};

export default LogoutButton;
