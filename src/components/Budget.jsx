import styles from './Budget.module.css';
import Button from './Button';

export default function Budget() {
  return (
    <section className={styles.Budget}>
      <div className={styles.description}>
        <h3>Transforme seu apartamento em um <br /> espaço único e especial</h3>
        <Button>pedir orçamento</Button>
      </div>
    </section>
  )
}
