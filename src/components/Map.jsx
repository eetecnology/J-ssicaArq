import styles from './Map.module.css';

export default function Map() {
  return (
    <div className={styles.map}>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.924860971031!2d-37.27955222545082!3d-7.473549973680895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a8a80b229bf635%3A0xb5ed713f5df4bb8!2sR.%20Prof.%20%C3%89dson%20Sim%C3%B5es%20-%20S%C3%A3o%20Jos%C3%A9%20do%20Egito%2C%20PE%2C%2056700-000!5e0!3m2!1spt-BR!2sbr!4v1723468778109!5m2!1spt-BR!2sbr" 
      width="400" 
      height="300" 
      style={{ border: 0 }}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    >
    </iframe>
    </div>
  )
}
