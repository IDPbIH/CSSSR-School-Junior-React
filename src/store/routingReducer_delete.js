// Routing Module.js

// // Actions

//initialState
const initialState = {};

// Reducer
const routingReducer = (state = initialState, action) => {
    switch (action.type) {
//         case SET_ACTIVE_PAGE:
//             return {
//                 ...state,
//                 path: '/productlist',
//                 queryItems: { ...state.queryItems, activePage: Number(action.page) }
//             };
//         case SET_ACTIVE_CATEGORIES:
//             return {
//                 ...state,
//                 path: '/productlist',
//                 queryItems: {
//                     ...state.queryItems,
//                     activePage: 1,
//                     activeCategories: isCategoryActive(state.queryItems.activeCategories, action.category)
//                         ? state.queryItems.activeCategories.filter(category => category !== action.category)
//                         : [...state.queryItems.activeCategories, action.category]
//                 }
//             };
//         case 'SET_STATE_FROM_HISTORY':
//             return action.state.routing;
//         case 'SET_DEFAULT_FILTERS_VALUE':
//             return {
//                 ...initialState,
//                 path: '/productlist',
//                 queryItems: {
//                     ...initialState.queryItems,
//                     activePage: 1,
//                     activeCategories: []
//                 }
//             };
        default:
            return state;
    }
};

export default routingReducer;




