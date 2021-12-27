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
                                {state.categories.map((category, index) => {
                                    return (
                                        <label className={s.checkbox_btn}>
                                            <input
                                                type="checkbox"
                                                name={category.category}
                                                checked={category.category === window.location.pathname.substr(1) ? true : false}
                                                onChange={(e) => { this.props.handleStateChange('checkbox', e) }}
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