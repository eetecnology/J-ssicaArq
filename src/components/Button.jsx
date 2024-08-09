import styles from './Button.module.css';

export default function Button({ children, bgActive }) {
  return (
    <button className={`${styles.button} && ${bgActive ? styles.bgPrimary : ''}`}>
      {children}
    </button>
  )
}
