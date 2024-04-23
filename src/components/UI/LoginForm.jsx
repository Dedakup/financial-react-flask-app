import React, { useState } from 'react';
import InputField from './InputField.jsx';
import Checkbox from './checkbox.jsx';
import '../../styles/LoginForm.sass'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';

function LoginForm({ inputProps, linkText, linkPath, buttonText }) {
    // Состояния для хранения данных формы
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    // Обработчики изменения в полях ввода
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Функция для обработки отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data: ", formData);
        // Здесь может быть код для отправки данных на сервер
    };

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            {inputProps.map((input, index) => (
                <div key={index}>
                    <InputField
                        label={input.label}
                        type={input.type === 'password' && isPasswordVisible ? 'text' : input.type}
                        placeholder={input.placeholder}
                        value={formData[input.name]}
                        onChange={handleInputChange}
                        name={input.name}
                    />
                    {input.type === 'password' && (
                        <button onClick={() => setIsPasswordVisible(!isPasswordVisible)} type="button" className="password-visibility-toggle">
                            <EyeIcon />
                        </button>
                    )}
                </div>
            ))}
            {linkText && linkPath && (
                <a href={linkPath} className="form-link">
                    {linkText}
                </a>
            )}
            <Checkbox
                id="keep-signed-in"
                label="Keep me signed in"
                checked={keepSignedIn}
                onChange={(event) => setKeepSignedIn(event.target.checked)}
            />
            <button type="submit" className="form-button">{buttonText}</button>
        </form>
    );
}

export default LoginForm;
