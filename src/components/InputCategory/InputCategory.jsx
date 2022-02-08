import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import { isCategoryActive } from '../../utils/checks';
import setURL from '../../utils/setURL';
import { Link } from 'react-router-dom';

class InputCategory extends LogRender {
    render() {
        const { categories, activeCategories } = this.props;

        return (
            <div className={s.categories}>
                <h3 className={s.title}>Категории</h3>
                {categories.map((category,index) => {
                    const isChecked = isCategoryActive(activeCategories, category);

                    return (
                        <Link to={setURL('categories', category)} key={index}>
                            <button
                                name={category}
                                className={isChecked ? s.active_button : s.inActive_button}
                                key={index}
                            >{category}</button>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default InputCategory;