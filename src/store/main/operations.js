import { setError, setProductsFromAPI } from './actions';

export const getDataFromAPI = () => {
    return (dispatch) => {
        fetch('https://course-api.school.csssr.com/products')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так ...');
                }
            })
            .then(result => dispatch(setProductsFromAPI(result.products)))
            .catch(e => dispatch(setError('Товары не найдены')))
    }
}