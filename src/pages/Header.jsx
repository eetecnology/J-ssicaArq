import styles from './header.module.css';
import Menu from '../components/Menu';

export default function Header() {
  return (
    <div className={styles.header}>
      <header>
        <Menu />
      </header>
      <section className="hero">
      </section>
    </div>
  );
}
