import { store } from '../store';

const setURL = (type, value) => {
    console.log(window.location.pathname === '/')
    let url = window.location.pathname;
    url = '?' + type + '=' + value;
    window.history.pushState(store.getState(), type + '=' + value, url);
    // if (dataURL.length === 0) {
    //     window.history.pushState(store.getState(), '', '/');
    // } else {
    //     for (var i = 0; i < dataURL.length; i++) {
    //         i !== dataURL.length - 1
    //             ? url = url + 'p' + i + '=' + dataURL[i] + '&'
    //             : url = url + 'p' + i + '=' + dataURL[i]
    //     }
    //     window.history.pushState(store.getState(), '', url);
    // }
};

export default setURL;