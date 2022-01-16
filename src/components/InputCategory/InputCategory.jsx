import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';

class InputCategory extends LogRender {
    debugger
    render() {
        return (
            <div className={s.categories}>
                <h3 className={s.title}>Категории</h3>
                {this.props.categories.map((category) => {
                    return (
                        <label className={s.checkbox_btn} key={category.id}>
                            <input
                                type="checkbox"
                                name={category.category}
                                checked={this.props.categoriesSelected.includes(category.category) ? true : false}
                                onChange={() => { this.props.categorySelectionAC(category.category); }}
                            >
                            </input>
                            <span>{category.categoryName}</span>
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default InputCategory;