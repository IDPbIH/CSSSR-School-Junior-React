import React from 'react';
import page_s from './PageLinkButton.module.css';
import category_s from './CategoryLinkButton.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { isCategoryActive } from '../../../utils/checks';
import { getActiveCategoriesFromURL, getActivePageFromURL } from '../../../utils/getFromURL';

const LinkButton = ({ type, name, text }) => {
    useNavigate();

    let s;
    let activeCategories = '';
    let activeCategoriesFromURL = getActiveCategoriesFromURL();
    let page = getActivePageFromURL();
    let isChecked;

    if (type === 'page') {
        s = page_s;
        isChecked = true && page === Number(text)
        page = Number(name);
    }
    if (type === 'category') {
        s = category_s;
        isChecked = isCategoryActive(activeCategoriesFromURL, name);
        isChecked
            ? activeCategoriesFromURL = activeCategoriesFromURL.filter(category => category !== name)
            : activeCategoriesFromURL.push(name)
        activeCategoriesFromURL.forEach(category => {
            activeCategories = activeCategories + '&category=' + category;
        });
    }
    return (
        <Link to={`/productlist?page=${page}${activeCategories}`}>
            <button name={name} className={isChecked ? s.active_button : s.inActive_button}>{text}</button>
        </Link>
    );
}

export default LinkButton;