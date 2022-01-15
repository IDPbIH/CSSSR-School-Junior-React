const setURL = (state) => {
    let url = '';
    if (state.mainPage.categoriesSelected.length === 0) {
        window.history.pushState(state, '', '/');
    } else {
        for (var i = 0; i < state.mainPage.categoriesSelected.length; i++) {
            i !== state.mainPage.categoriesSelected.length - 1
                ? url = url + 'p' + i + '=' + state.mainPage.categoriesSelected[i] + '&'
                : url = url + 'p' + i + '=' + state.mainPage.categoriesSelected[i]
        }
        window.history.pushState(state, '', url);
    }
}

export default setURL;