import React from 'react';
import page_s from './PageLinkButton.module.css';
import category_s from './CategoryLinkButton.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import { isCategoryActive } from '../../../utils/checks';

const LinkButton = ({ type, name, text }) => {
    let s;
    let queryString = '';

    const [searchParams] = useSearchParams();
    let page = 1;
    let isChecked;
    let categories = searchParams.getAll('category');

    if (type === 'page') {
        s = page_s;
        
    } else {
        s = category_s;
        isChecked = isCategoryActive(categories, name);
        isChecked
            ? categories = categories.filter(category => category != name)
            : categories.push(name)
        categories.forEach(category => {
            queryString = queryString + '&category=' + category;
        });
    }
    return (
        <Link to={`/productlist?page=${page}${queryString}`}>
            <button name={name} className={isChecked ? s.active_button : s.inActive_button}>{text}</button>
        </Link>
    );
}

export default LinkButton;