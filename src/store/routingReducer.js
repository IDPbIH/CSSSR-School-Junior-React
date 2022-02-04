// Routing Module.js

// Selectors
export const getActivePageFromRouting = (state) => Number(state.router.location.query.page) || 1;
export const getActiveCategoriesFromRouting = (state) => new URLSearchParams(state.router.location.search).getAll('category');
export const getProductID = (state) => Number(state.router.location.query.id);