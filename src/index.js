import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Отримуємо посилання на кореневий елемент DOM
const rootElement = document.getElementById('root');
// Створюємо корінь рендерингу за допомогою нового API
const root = ReactDOM.createRoot(rootElement);

// Рендеримо додаток використовуючи React 18 API
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// При бажанні включіть вимірювання продуктивності в вашому додатку
reportWebVitals();
