import styles from './Projects.module.css'
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export default function Projects({ imageLeft }) {
  return (
    <div className={styles.projects}>
      <div className={`${styles.description} ${imageLeft ? styles.descriptionRight : ""}`}>
        <h2>VANESSA E JULIO</h2>
        <p>Apê pátio Mooca 134 m² – Pegamos as chaves junto aos clientes, onde conseguimos fazer a vistoria de entrega, logo após demos início ao projeto para a cozinha provençal, sala contemporânea e o escritório geek.
        Transmitimos a essência dos clientes em nossos projetos, onde colocamos o nosso toque com a decoração afetiva da família que ali vai viver.</p>
      </div>
      <div className={`${styles.images} ${imageLeft ? styles.imageLeft : ""}`}>
        <img src={project1} alt="Imagem do projeto" />
        <img src={project2} alt="Imagem do projeto" />
        <img src={project3} alt="Imagem do projeto" />
      </div>
    </div>
  )
}
