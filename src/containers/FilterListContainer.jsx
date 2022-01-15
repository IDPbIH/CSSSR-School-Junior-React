import React from 'react';
import FilterList from '../components/FilterList/FilterList';
import { StateContext, DispatchContext } from '../index';

const FilterListContainer = () => {
    const stateContext = React.useContext(StateContext);
    const dispatchContext = React.useContext(DispatchContext);

    return (
        <FilterList mainPage={stateContext.mainPage} dispatch={dispatchContext} />
    );
}

export default FilterListContainer;