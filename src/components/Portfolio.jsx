import styles from './Portfolio.module.css';
import Projects from './Projects';

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.text}>
        <h2>Projetos realizados</h2>
        <p>Trabalhamos com o estilo contemporâneo e atemporal, onde buscamos entender o gosto do cliente e aplicar de forma personalizada, com um toque de decoração afetiva para ser sentida, com características únicas e sempre diferente uns dos outros, acreditamos que um lar deve refletir seus moradores.</p>
      </div>
      <div className={styles.projects}>
        <Projects right={true} />
        <Projects left={true} />
        <Projects right={true} />
      </div>
    </section>
  )
}
