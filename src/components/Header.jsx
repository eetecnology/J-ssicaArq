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
      <div className={styles.logo}>
          JÉSSICA CAMPOS
        </div>
        <div className={styles.menu}>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about">SOBRE</a></li>
            <li><a href="#projects">PROJETOS</a></li>
            <li><a href="#evaluation">AVALIAÇÕES</a></li>
            <li><a href="#contact">CONTATO</a></li>
          </ul>
        </nav>
        <div/>
        <button onClick={toggleMenu} className={styles.buttonMenu}>
          {menuOpen? <BurguerMenuClose size={15} className={styles.burgerMenu} /> : <BurguerMenu size={15} className={styles.burgerMenuClose} />}
        </button>
        {<nav className={`${styles.navbarMobile} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li><a href="#about">SOBRE</a></li>
            <li><a href="#projects">PROJETOS</a></li>
            <li><a href="#evaluation">AVALIAÇÕES</a></li>
            <li><a href="#contact">CONTATO</a></li>
          </ul>
        </nav>}
      </div>
    </header>
  );
}
