// Routing Module.js

// Selectors
export const getActivePage = (state) => Number(state.router.location.query.page) || 1;
export const getActiveCategories = (state) => new URLSearchParams(state.router.location.search).getAll('category');
export const getProductID = (state) => Number(state.router.location.query.id);