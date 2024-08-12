import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children, bgActive }) {
  Button.propTypes = {
    children: PropTypes.string,
    bgActive: PropTypes.string,
  };
  return (
    <button className={`${styles.button} && ${bgActive ? styles.bgPrimary : ''}`}>
      {children}
    </button>
  )
}
