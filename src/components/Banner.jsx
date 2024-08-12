import styles from './Banner.module.css';
import Button from './Button';

export default function Banner() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Estou interessado em ver os projetos.";
    const phoneNumber = "5511999999999"; // Substitua com o número de telefone desejado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>BUSCAMOS ENTENDER O</h1> 
        <h1>GOSTO DO CLIENTE</h1>
        <Button className={styles.button} bgActive={true} onClick={handleWhatsAppClick}>
          VER PROJETOS
        </Button>
      </div>
    </section>
  );
}
