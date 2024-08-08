import { useState } from 'react';
import styles from './Header.module.css';
import { TfiAlignJustify as BurguerMenu  } from "react-icons/tfi";
import { TfiClose as BurguerMenuClose } from "react-icons/tfi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
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
        <button onClick={toggleMenu} className={styles.buttonMenu}>
          {menuOpen? <BurguerMenuClose size={15} className={styles.burgerMenu} /> : <BurguerMenu size={15} className={styles.burgerMenuClose} />}
        </button>
        {<nav className={`${styles.navbarMobile} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#evaluation">Avaliação</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>}
      </div>
    </header>
  );
}
