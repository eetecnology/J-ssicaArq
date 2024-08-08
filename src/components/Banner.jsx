import styles from './Banner.module.css';
import Button from './Button';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>BUSCAMOS ENTENDER O</h1> 
        <h1>GOSTO DO CLIENTE</h1>
        <Button className={styles.button}>
          VER PROJETOS
        </Button>
      </div>
    </section>
  );
}
