import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
          Jéssica Campos
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#evaluation">Avaliação</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
}
