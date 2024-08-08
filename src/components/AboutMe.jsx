import styles from './AboutMe.module.css';
import ImagePessoal from '../assets/image-demostrativa1.png';

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <img src={ImagePessoal} alt="" />
      </div>
      <div className={styles.description}>
        <h2>Jéssica Campos</h2>
        <p>Arquiteta com mais de 17 anos de experiência, atua em reformas e decoração de imóveis residenciais e comerciais. <br/> É especialista em paisagismo e possui portfólio com projetos inovadores na região de São José do Egito.</p>
        <div className={styles.descriptionFrame}>
          <div>
            <h6>+68</h6>
            <p>IMÓVEIS REFORMADOS</p>
          </div>
          <div>
            <h6>+17</h6>
            <p>ANOS DE ESPERIÊNCIA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
