import { useEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Rodape.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Rodape(){
  useEffect(() => {
    const rodas = document.querySelectorAll(`.${styles.rodape} > div`);
    let mm = gsap.matchMedia();

    mm.add("(max-width: 799px)", () => {
      rodas.forEach((rodape) => {
        gsap.fromTo(rodape, { x: -240, opacity: 0 }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
              trigger: rodape,
              start: '-400 center',
              end: 'bottom -500',
              scrub: false,
          }
        });
      });
    });

    mm.add("(min-width: 800px)", () => {
      rodas.forEach((rodape, index) => {
        gsap.fromTo(rodape, { x: -400 * (index + 1), opacity: 0 * (index), duration: 3 }, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
              trigger: rodape,
              start: '-350 center',
              end: '-350 center',
              scrub: false,
          }
        });
      });
    });

    return () => mm.revert();
  }, []);
  return(
    <section className={styles.rodape}>
      <div className={styles.name}>
        <h3>Jéssica Campos</h3>
        <div className={styles.coment}>
          <p>Formada em Arquitetura e Designer de interiores pelo Centro Universitário Belas Artes de São Paulo, 
          atua há quase 17 anos no mercado, onde adquiriu experiência em escritórios renomados da grande São Paulo. 
          Focada em reformas e decoração, hoje comanda sua própria equipe, onde já soma mais de 60 projetos residenciais e comerciais.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h3>O QUE FAZEMOS</h3>
        <ul>
          <li>Arquitetura</li>
          <li>Design de interiores</li>
          <li>Assessoria de Obra</li>
          <li>Consultoria decorativa</li>
        </ul>
      </div>

      <div className={styles.navegation}>
        <h3>NAVEGAÇÃO</h3>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#avaliacao">Avaliação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </section>
  )
}
