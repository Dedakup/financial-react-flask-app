import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Для определения текущего маршрута
import '../../styles/header.sass';

const CalendarIcon = () => (
    <svg className="calendar-icon" width="24" height="24" viewBox="0 0 24 24">
        {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 17L18 12L13 7" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 17L11 12L6 7" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        }
    </svg>
);

const Header = ({ showGreeting }) => {
    const location = useLocation();
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const [searchTerm, setSearchTerm] = useState('');
    const [scrolled, setScrolled] = useState(false);

    // Функция обработки прокрутки
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Функция для обработки изменения в поле поиска
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Функция для обработки запроса поиска
    const handleSearch = (event) => {
        event.preventDefault();
        // Здесь можно добавить логику поиска или редирект на страницу поиска с переданным поисковым запросом
        console.log('Search Term:', searchTerm);
    };

    return (
        <div className={`header ${scrolled ? 'scrolled' : ''}`}>
            {showGreeting && location.pathname === '/overview' ? (
                <div className="header-greeting">
                    <h1>Hello User</h1>
                    <span><CalendarIcon /> {currentDate}</span>
                </div>
            ) : (
                <span><CalendarIcon /> {currentDate}</span>
            )}
            <div className="header-search">
                {/* Добавляем форму для обработки поиска */}
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {/* Кнопка поиска */}
                    <button type="submit" className="search-button" aria-label="Search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#525256" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#525256" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
