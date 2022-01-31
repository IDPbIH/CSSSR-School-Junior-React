import React from 'react';
import page_s from './PageLinkButton.module.css';
import category_s from './CategoryLinkButton.module.css';
import { Link, useLocation } from 'react-router-dom';
import { isCategoryActive } from '../../utils/checks';
import { getActiveCategoriesFromURL, getActivePageFromURL } from '../../utils/getFromURL';

const LinkButton = ({ type, name, text }) => {
    useLocation();

    let s;
    let activeCategories = '';
    let activeCategoriesFromURL = getActiveCategoriesFromURL();
    let page = 1;
    let isChecked;

    switch (type) {
        case 'page':
            s = page_s;
            isChecked = true && Number(text) === getActivePageFromURL()
            page = Number(name);
            break;
        case 'category':
            s = category_s;
            isChecked = isCategoryActive(activeCategoriesFromURL, name);
            isChecked
                ? activeCategoriesFromURL = activeCategoriesFromURL.filter(category => category !== name)
                : activeCategoriesFromURL.push(name)
            break;
        default:
    }
    activeCategoriesFromURL.forEach(category => {
        activeCategories = activeCategories + '&category=' + category;
    });
    return (
        <Link to={`/productlist?page=${page}${activeCategories}`}>
            <button name={name} className={isChecked ? s.active_button : s.inActive_button}>{text}</button>
        </Link>
    );
}

export default LinkButton;