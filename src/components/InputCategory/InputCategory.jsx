import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import LinkButton from '../Buttons/LinkButton/LinkButton';

class InputCategory extends LogRender {
    render() {
        const { categories } = this.props;

        return (
            <div className={s.categories}>
                <h3 className={s.title}>Категории</h3>
                {categories.map((category) => {
                    return (
                        <LinkButton
                            type='category'
                            name={category.category}
                            text={category.categoryName}
                            key={category.id} />
                    );
                })}
            </div>
        );
    }
}

export default InputCategory;