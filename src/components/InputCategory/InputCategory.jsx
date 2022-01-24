import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import Link from '../Link/Link';

class InputCategory extends LogRender {
    render() {
        const { categories, activeCategories } = this.props;

        return (
            <div className={s.categories}>
                <h3 className={s.title}>Категории</h3>
                {categories.map((category) => {
                    return (
                        <Link type='category' name={category.category} value={category.category} key={category.id}>
                            <label className={s.checkbox_btn} key={category.id}>
                                
                                <input
                                    type="checkbox"
                                    name={category.category}
                                    defaultChecked={activeCategories.includes(category.category) ? true : false}
                                ></input>
    
                                <span>{category.categoryName}</span>
                            </label>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default InputCategory;