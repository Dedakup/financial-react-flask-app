import React from "react";
import "../../styles/divider.sass"; // Предполагается, что стили находятся в этом файле

const Divider = ({ text }) => {
    return (
        <div class="signin-divider">
            <span class="divider-line"></span>
            <span class="divider-text">{text}</span>
            <span class="divider-line"></span>
        </div>
    );
};

export default Divider;
