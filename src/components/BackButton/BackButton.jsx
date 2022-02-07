import React from 'react';
import { history } from '../../store';
import s from './BackButton.module.css';

export const BackButton = () => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={s.arrow}
      onClick={() => history.goBack()}>
      <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="black" />
    </svg>
  );
};