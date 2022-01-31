export const getActiveCategoriesFromURL = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const categories = searchParams.getAll('category');
    return categories;
}

export const getActivePageFromURL = () => {
    const searchParams = new URLSearchParams(window.location.search);
    let page = 1;
    if (searchParams.get('page')!==null) {
        page = searchParams.get('page');
    }
    return Number(page);
}

export const getProductByIdFromURL = (products) => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    const product = products.filter(product => (product.id === Number(id)));
    return product;
}