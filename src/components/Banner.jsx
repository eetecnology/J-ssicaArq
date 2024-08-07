import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.text}>
        <h1>BUSCAMOS ENTENDER O GOSTO DO CLIENTE</h1>
        <button>VER PROJETOS</button>
      </div>
      <div className={styles.image}>
        {/* Sua imagem aqui */}
      </div>
    </section>
  );
}
