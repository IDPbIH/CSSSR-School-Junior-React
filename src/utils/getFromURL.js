import ProductsJSON from '../products.json';

export const getPageFromURL = window.location.search.match('(\\d+)');
export const getActiveCategoriesFromURL = [...new Set(
    ProductsJSON.filter(product => window.location.search.includes(product.category))
        .map(product => { return product.category; })
)];