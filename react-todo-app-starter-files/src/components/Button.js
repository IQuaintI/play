import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, variant = 'primary' }) {
  return (
    <button type="button" className={getClasses([styles.button])}>
      {children}
    </button>
  );
}

export default Button;
