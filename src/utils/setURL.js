import { isCategoryActive } from './checks';

export const setURL = (type, value) => {
    let page = 1;
    let categoriesFromURL = new URLSearchParams(window.location.search).getAll('category');

    switch (type) {
        case 'category':
            isCategoryActive(categoriesFromURL, value)
                ? categoriesFromURL = categoriesFromURL.filter(category => category !== value)
                : categoriesFromURL.push(value)
            break;
        case 'page':
            page = Number(value);
            break;
        default:
    }

    const categories = categoriesFromURL.map(category => '&category=' + category).join('');
    const url = `/productlist?page=${page}${categories}`;

    return url;
};

export default setURL;