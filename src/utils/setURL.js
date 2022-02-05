import { isCategoryActive } from './checks';
import getActiveCategories from './getActiveCategories';

export const setURL = (type, value) => {
    let url = new URL(document.location);
    let categories = getActiveCategories(url.search);
    let page = 1;

    switch (type) {
        case 'categories':
            isCategoryActive(categories, value)
                ? categories = categories.filter(category => category !== value)
                : categories.push(value)
            url.searchParams.set(type, categories);
            break;
        case 'page':
            page = Number(value);
            break;
        default:
    }
    url.searchParams.set('page', page);

    return decodeURIComponent(url.search);
};

export default setURL;