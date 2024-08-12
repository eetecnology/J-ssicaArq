import styles from './Budget.module.css';
import Button from './Button';

export default function Budget() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de pedir um orçamento.";
    const phoneNumber = "5511999999999"; // Substitua com o número de telefone desejado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className={styles.Budget}>
      <div className={styles.description}>
        <h3>Transforme seu apartamento em um <br /> espaço único e especial</h3>
        <Button onClick={handleWhatsAppClick}>Pedir Orçamento</Button>
      </div>
    </section>
  );
}
