import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Summary.module.css'

gsap.registerPlugin(ScrollTrigger); 

export default function Summary() {
    useEffect(() => {
        const boxes = document.querySelectorAll(`.${styles.box} > div`)
        boxes.forEach((box, index) => { gsap.fromTo(box, {x: -400 * (index + 1), opacity: 0.2 * (index), duration: 0.3 },
    { 
        x: 0,
        opacity: 1,
        scrollTrigger:{
            trigger: box,
            start: '-260 center',
            end: 'bottom 500',
            scrub: true,
        }
    } )})
    },[])

    return (
 <section className={styles.fund}>
    <div className={styles.summary}>
        <h2 className={styles.title}>
        O QUE FAZEMOS
        </h2>
            <p className={styles.resume}>
                Trabalhamos com o estilo contemporâneo e atemporal, 
                onde buscamos entender o gosto do cliente e aplicar de <br /> 
                forma personalizada, com um toque de decoração afetiva para ser sentida, 
                com características únicas e sempre <br />
                diferente uns dos outros, acreditamos que um lar deve refletir seus moradores.
            </p>
    </div>
    <div className={styles.box}>
        <div>
            <h2>
             ARQUITETURA
            </h2>
            <p>A empresa de design de interiores <br /> oferece 
                um serviço <br /> completo, que atende às <br /> necessidades dos
                clientes e <br /> cria projetos
                que atendam <br /> aos seus sonhos.</p>
        </div>
        <div>
             <h2>
                DESIGN DE INTERIORES
            </h2>
            <p>
                Planejamos o <br />desenvolvimento de 
                projetos <br />para áreas residenciais e <br />comerciais
                especificando <br /> itens necessários para que o <br />
                ambiente fique completo.</p>
        </div>
        <div>
            <h2>ASSESORIA DE OBRA</h2>
            <p>
                Tem caráter preventivo e <br /> busca conferir a qualidade <br />dos serviços,
                atestando e <br />documentando a instalação <br /> do projeto executado. 
                </p>
        </div>
        <div>
            <h2>
            CONSULTORIA DECORATIVA
            </h2>
            <p>
                Para ambientes com a <br />arquitetura pronta que não <br />precisem de reforma,
                apenas <br />melhorar o espaço de forma <br />rápida,
                eficaz com itens de <br />decoração. 
            </p>
        </div>
    </div>
</section>
    )
}