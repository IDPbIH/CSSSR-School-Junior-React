import React from 'react';
import page_s from './PageLinkButton.module.css';
import category_s from './CategoryLinkButton.module.css';
import { Link } from 'react-router-dom';
import { isCategoryActive } from '../../utils/checks';
import { getActiveCategories, getActivePage } from '../../store/routingReducer';
import { connect } from 'react-redux';

const LinkButton = ({ type, name, text, activePageFromRouting, activeCategoriesFromRouting}) => {
    let s;
    let isChecked;
    let activePage = 1;
    
    switch (type) {
        case 'page':
            s = page_s;
            isChecked = true && Number(text) === activePageFromRouting
            activePage = Number(name);
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

    const activeCategories = activeCategoriesFromRouting.map(category => '&category=' + category).join('');
    
    return (
        <Link to={`/productlist?page=${activePage}${activeCategories}`}>
            <button name={name} className={isChecked ? s.active_button : s.inActive_button}>{text}</button>
        </Link>
    );
}

export default connect((state) => {
    return {
        activePageFromRouting: getActivePage(state),
        activeCategoriesFromRouting: getActiveCategories(state)
    }
})(LinkButton);