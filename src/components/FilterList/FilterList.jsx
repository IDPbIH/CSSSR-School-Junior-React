import React from 'react';
import s from './FilterList.module.css';
import LogRender from '../LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';
import InputCategory from '../InputCategory/InputCategory';
import memoize from '../../utils/memoize';
import { stateReset } from '../../store/mainReducer';

class FilterList extends LogRender {
    renderInputNumber = memoize(
        (mainPage, dispatch) => <InputNumber mainPage={mainPage} dispatch={dispatch} />
    );

    renderInputDiscount = memoize(
        (mainPage, dispatch) => <InputDiscount mainPage={mainPage} dispatch={dispatch} />
    );

    renderInputCategory = memoize(
        (mainPage, dispatch) => <InputCategory mainPage={mainPage} dispatch={dispatch} />
    );

    setDefault = (event) => {
        event.preventDefault();
        this.props.dispatch(stateReset());
    }

    render() {
        return (
            <form>
                {this.renderInputNumber(this.props.mainPage, this.props.dispatch)}
                {this.renderInputDiscount(this.props.mainPage, this.props.dispatch)}
                {this.renderInputCategory(this.props.mainPage, this.props.dispatch)}
                <button className={s.reset_button} onClick={this.setDefault}>Сбросить фильтры</button>
            </form>
        );
    }
}

export default FilterList;