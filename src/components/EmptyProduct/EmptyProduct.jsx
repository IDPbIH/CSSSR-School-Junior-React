import React from 'react';
import s from './EmptyProduct.module.css';

export const EmptyProduct = () => {
    return (
        <div>
            <div className={s.img}></div>
            <div className={s.name}></div>
            <div className={s.rating}></div>
            <div className={s.prices}></div>
        </div>
    );
};