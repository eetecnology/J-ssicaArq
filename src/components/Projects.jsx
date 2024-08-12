import styles from './Projects.module.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Projects({ imageLeft }) {
  const [expandedImage, setExpandedImage] = useState(null);

  Projects.propTypes = {
    imageLeft: PropTypes.string,
  };

  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const handleContainerClick = (e) => {
    if (e.target.classList.contains(styles.fullscreenImageContainer)) {
      setExpandedImage(null);
    }
  };

  return (
    <div className={styles.projects}>
      <div className={`${styles.description} ${imageLeft ? styles.descriptionRight : ""}`}>
        <h2>VANESSA E JULIO</h2>
        <p>Apê pátio Mooca 134 m² – Pegamos as chaves junto aos clientes, onde conseguimos fazer a vistoria de entrega, logo após demos início ao projeto para a cozinha provençal, sala contemporânea e o escritório geek.
        Transmitimos a essência dos clientes em nossos projetos, onde colocamos o nosso toque com a decoração afetiva da família que ali vai viver.</p>
      </div>
      <div className={`${styles.images} ${imageLeft ? styles.imageLeft : ""}`}>
        <img 
          src={project1} 
          alt="Imagem do projeto" 
          className={styles.expandableImage}
          onClick={() => handleImageClick(project1)}
        />
        <img 
          src={project2} 
          alt="Imagem do projeto" 
          className={styles.expandableImage}
          onClick={() => handleImageClick(project2)}
        />
        <img 
          src={project3} 
          alt="Imagem do projeto" 
          className={styles.expandableImage}
          onClick={() => handleImageClick(project3)}
        />
      </div>
      {expandedImage && (
        <div 
          className={styles.fullscreenImageContainer} 
          onClick={handleContainerClick}
        >
          <img src={expandedImage} alt="Imagem expandida" className={styles.fullscreenImage} />
        </div>
      )}
    </div>
  );
}
