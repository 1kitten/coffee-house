import styles from './ServicesPage.module.scss';
import { Carousel } from 'react-carousel3';

export const ServicesPage = ({ }) => {
  let radius = window.innerWidth
    if (window.innerWidth > 1000) {
      radius = 500
    } else if (1000 > window.innerWidth  && window.innerWidth > 600) {
      radius = 300
    } else {
      radius = 100
    }

  const checkClick = (e) => {
    console.log(e.target.dataset.action)
  }
  
  return(
  <section className={styles.servicesPage}>
    <div onClick={checkClick} className={styles.wrapper}>
      <Carousel width={300} height={200} xRadius={radius}>
        <label key={1} onClick={checkClick} className={styles.title} data-action="Coffee">Coffee</label>
        <label key={2} onClick={checkClick} className={styles.title} data-action="Way">Take a way</label>
        <label key={3} onClick={checkClick} className={styles.title} data-action="Beans">Beans</label>
        <label key={4} onClick={checkClick} className={styles.title} data-action="Pastry">Pastry</label>
      </Carousel>
    </div>
  </section>
  )
};
