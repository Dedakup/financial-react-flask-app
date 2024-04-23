import React from 'react';
import '../../styles/checkbox.sass'

const Checkbox = ({ id, label, checked, onChange }) => {
    return (
        <label htmlFor={id} className="checkbox-container">
            {label}
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="checkmark"></span>
        </label>
    );
};

export default Checkbox;
