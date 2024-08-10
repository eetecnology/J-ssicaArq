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
    <div className={styles.effectBox}>
    <div className={styles.summary}>
        <h2 className={styles.title}>
        O QUE FAZEMOS
        </h2>
            <p className={styles.resume}>
                Trabalhamos com o <span className={styles.span}>estilo contemporâneo e atemporal</span>, 
                onde buscamos entender o gosto do cliente e aplicar de <br /> 
                forma personalizada, com um toque de decoração afetiva para ser sentida, 
                com <span className={styles.span}>características únicas</span> e sempre <br />
                diferente uns dos outros, acreditamos que um lar deve refletir seus moradores.
            </p>
    </div>
    <div className={styles.box}>
        <div>
            <img src="src/assets/detail.png" />
            <h2>
             ARQUITETURA
            </h2>
            <p>A empresa de design de interiores oferece 
                um serviço  completo, que atende às necessidades dos
                clientes e  cria projetos
                que atendam  aos seus sonhos.</p>
        </div>
        <div>
            <img src="src/assets/detail.png" />
             <h2>
                DESIGN DE INTERIORES
            </h2>
            <p>
                Planejamos o desenvolvimento de 
                projetos para áreas residenciais e comerciais
                especificando  itens necessários para que o 
                ambiente fique completo.</p>
        </div>
        <div>
            <img src="src/assets/detail.png" />
            <h2>ASSESORIAS DE OBRAS</h2>
            <p>
                Tem caráter preventivo e  busca conferir a qualidade dos serviços,
                atestando e documentando a instalação  do projeto executado. 
                </p>
        </div>
        <div>
            <img src="src/assets/detail.png" />
            <h2>
            CONSULTORIA DECORATIVA
            </h2>
            <p>
                Para ambientes com a arquitetura pronta que não precisem de reforma,
                apenas melhorar o espaço de forma rápida,
                eficaz com itens de decoração. 
            </p>
        </div>
    </div>
</div>
</section>
    )
}