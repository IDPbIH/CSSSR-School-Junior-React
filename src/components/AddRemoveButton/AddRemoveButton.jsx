import React from 'react';
import s from './AddRemoveButton.module.css';

const AddRemoveButton = ({ loading, id, productInBasket, setBasket }) => {
    return (
        <div>
            <button
                onClick={() => setBasket(id)}
                className={loading ? s.addRemove_button + ' ' + s.lock : s.addRemove_button}
                disabled={loading}
            >
                {productInBasket ? 'Убрать из корзины' : 'Добавить в корзину'}
            </button>
        </div>
    );
};

export default AddRemoveButton;