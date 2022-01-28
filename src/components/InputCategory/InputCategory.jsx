import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import LinkButton from '../LinkButton/LinkButton';
import { isCategoryActive } from '../../utils/checks';

class InputCategory extends LogRender {
    render() {
        const { categories, activeCategories } = this.props;

        return (
            <div className={s.categories}>
                <h3 className={s.title}>Категории</h3>
                {categories.map((category) => {
                    return (
                        <LinkButton type='category'
                            name={category.category}
                            value={category.category}
                            text={category.categoryName}
                            isChecked={isCategoryActive(activeCategories, category.category) ? true : false}
                            keyButton={category.id}
                            key={category.id} />
                    );
                })}
            </div>
        );
    }
}

export default InputCategory;