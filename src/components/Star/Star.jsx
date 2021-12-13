import React from 'react';

const Star = ({ design }) => {
    switch (design) {
        case 'empty': return (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87337 4.74659L13.6667 5.15992L10.0334 8.31325L11.12 12.9999L7.00004 10.5133L2.88004 12.9999L3.97337 8.31325L0.333374 5.15992L5.12671 4.75325L7.00004 0.333252L8.87337 4.74659ZM4.49337 10.7799L7.00004 9.26659L9.51337 10.7866L8.84671 7.93325L11.06 6.01325L8.14004 5.75992L7.00004 3.06659L5.86671 5.75325L2.94671 6.00659L5.16004 7.92659L4.49337 10.7799Z" fill="#323C48" />
            </svg>
        );
        case 'filled': return (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00004 10.5133L11.12 12.9999L10.0267 8.31325L13.6667 5.15992L8.87337 4.75325L7.00004 0.333252L5.12671 4.75325L0.333374 5.15992L3.97337 8.31325L2.88004 12.9999L7.00004 10.5133Z" fill="#323C48" />
            </svg>)
            ;
        default: return (
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87331 4.74659L13.6666 5.15992L10.0333 8.31325L11.12 12.9999L6.99998 10.5133L2.87998 12.9999L3.97331 8.31325L0.333313 5.15992L5.12665 4.75325L6.99998 0.333252L8.87331 4.74659ZM6.99998 3.06659V9.26659L9.51331 10.7866L8.84665 7.93325L11.06 6.01325L8.13998 5.75992L6.99998 3.06659Z" fill="#323C48" />
            </svg>
        );
    }
}

export default Star;