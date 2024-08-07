import styles from 'Banner.module.css';

export default function Banner() {
  return (
    <div>
      <div className={styles.heroText}>
        <h1>BUSCAMOS ENTENDER O GOSTO DO CLIENTE</h1>
        <button>VER PROJETOS</button>
      </div>
      <div className={styles.heroImage}>
        {/* Sua imagem aqui */}
      </div>
    </div>
  )
}
