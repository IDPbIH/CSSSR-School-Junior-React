import { setLoading, saveBasket, setError } from './actions';

export const sendBasket = (basket) => {
    return (dispatch) => {
        dispatch(setLoading());
        fetch('https://course-api.school.csssr.com/save', {
            method: 'POST',
            body: JSON.stringify(basket),
            mode: 'cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw setError('Проблемы с сетью');
            }
        })
            .then(result => dispatch(saveBasket(result.result)))
            .catch(e => dispatch(setError('Ошибка. Корзина не сохранена')));
    };
};