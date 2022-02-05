import getActiveCategories from '../utils/getActiveCategories';

// Routing Module.js

// Selectors
export const getActivePageFromRouting = (state) => Number(state.router.location.query.page) || 1;
export const getActiveCategoriesFromRouting = (state) => getActiveCategories(state.router.location.search);
export const getProductID = (state) => Number(state.router.location.query.id);