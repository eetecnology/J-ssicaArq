import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.description}>
        <h2>Contato</h2>
        <p>Endereço: Rua Catiguá 159 - sala 703 , Tatuapé - SP</p>
        <p>E-mail: contato@joicecamargoarquitetura.com.br</p>
        <p>Telefone: (11) 97335-9681</p>
      </div>
      <div className={styles.map}>
        MAPA
      </div>
    </section>
  )
}
