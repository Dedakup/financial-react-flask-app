// InputField.jsx
import React, { useState } from 'react';
import styles from '../../styles/InputField.sass'; // Предполагается, что стили находятся в этом файле

const InputField = ({ type, placeholder, name, icon }) => {
    // Состояние для проверки, находится ли input в фокусе
    const [isFocused, setIsFocused] = useState(false);

    return (
            <input
                className={styles.inputField}
                type={type}
                placeholder={placeholder}
                name={name}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
    );
};

export default InputField;
