const getActiveCategories = (search) => {
    const getCategories = new URLSearchParams(search).get('categories');
    const activeCategories = (getCategories !== null && getCategories !== '')
        ? getCategories.split(',')
        : [];

    return activeCategories;
}

export default getActiveCategories;