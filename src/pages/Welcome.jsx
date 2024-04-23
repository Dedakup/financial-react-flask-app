import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

  return (
    <>
      <main>
        <h1>Welcome</h1>
        <p>Это шаблон новой страницы. Сюда вы можете добавить свое содержимое.</p>
        <Link className="SignIn-Btn" to="/login">Войти</Link>
      </main>
    </>
  );
};

export default WelcomePage;