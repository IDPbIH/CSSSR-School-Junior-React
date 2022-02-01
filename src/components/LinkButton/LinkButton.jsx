import React from 'react';
import page_s from './PageLinkButton.module.css';
import category_s from './CategoryLinkButton.module.css';
import { Link } from 'react-router-dom';
import { isCategoryActive } from '../../utils/checks';
import { getActiveCategories, getActivePage } from '../../store/routingReducer';
import { connect } from 'react-redux';

const LinkButton = ({ type, name, text, activePage, activeCategoriesFromRouting}) => {
    let s;
    let activeCategories = '';
    let page = activePage;
    let isChecked;

    switch (type) {
        case 'page':
            s = page_s;
            isChecked = true && Number(text) === activePage
            page = Number(name);
            break;
        case 'category':
            s = category_s;
            isChecked = isCategoryActive(activeCategoriesFromRouting, name);
            isChecked
                ? activeCategoriesFromRouting = activeCategoriesFromRouting.filter(category => category !== name)
                : activeCategoriesFromRouting.push(name)
            break;
        default:
    }
    activeCategoriesFromRouting.forEach(category => {
        activeCategories = activeCategories + '&category=' + category;
    });
    return (
        <Link to={`/productlist?page=${page}${activeCategories}`}>
            <button name={name} className={isChecked ? s.active_button : s.inActive_button}>{text}</button>
        </Link>
    );
}

export default connect((state) => {
    return {
        activePage: getActivePage(state),
        activeCategoriesFromRouting: getActiveCategories(state)
    }
})(LinkButton);