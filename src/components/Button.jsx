import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children, bgActive, onClick }) {
  return (
    <button 
      className={`${styles.button} ${bgActive ? styles.bgPrimary : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgActive: PropTypes.bool,
  onClick: PropTypes.func,
};
