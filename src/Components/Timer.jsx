import React from 'react';

/**
 * Функциональный компонент таймер.
 * 
 * @param {Object} props Пропсы компонента.
 */
const Timer = (props) => {
    return <div>Timer: {props.counter}</div>;
}

export {Timer};