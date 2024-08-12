import styles from './Contact.module.css';
import Map from './Map';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.description}>
        <h2>Contato</h2>
        <div>
          <p><b>Endereço:</b> Rua Catiguá 159 - sala 703 , Tatuapé - SP</p>
          <p><b>E-mail:</b> contato@joicecamargoarquitetura.com.br</p>
          <p><b>Telefone:</b> (11) 97335-9681</p>
        </div>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </section>
  )
}
