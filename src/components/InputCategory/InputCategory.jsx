import React from 'react';
import s from './InputCategory.module.css'
import LogRender from '../../components/LogRender/LogRender';
import { StateContext } from '../../index';

class InputCategory extends LogRender {
    render() {
        return (
            <StateContext.Consumer>
                {
                    (state) => (
                        <div className={s.categories}>
                            <h3 className={s.title}>Категории</h3>
                            {state.categories.map((category) => {
                                return (
                                    <label className={s.checkbox_btn} key={category.id}>
                                        <input
                                            type="checkbox"
                                            name={category.category}
                                            checked={state.categoriesSelected.includes(category.category) ? true : false}
                                            onChange={(e) => { this.props.handleStateChange('checkbox', e.target.name) }}
                                        >
                                        </input>
                                        <span>{category.categoryName}</span>
                                    </label>
                                );
                            })}
                        </div>
                    )
                }
            </StateContext.Consumer>
        );
    }
}

export default InputCategory;