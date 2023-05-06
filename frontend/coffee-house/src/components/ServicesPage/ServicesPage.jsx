import styles from './ServicesPage.module.scss';
import { useState } from 'react';
import { Carousel } from 'react-carousel3';
import { Item } from '../Item/Item'

export const ServicesPage = ({ }) => {
  let radius = window.innerWidth
  const [category, setCategory] = useState('coffee')

    if (window.innerWidth > 1000) {
      radius = 500
    } else if (1000 > window.innerWidth  && window.innerWidth > 600) {
      radius = 300
    } else {
      radius = 100
    }

  const checkClick = (e) => {
    if (e.target.dataset.action) {
      setCategory(e.target.dataset.action)
    }
  }
  
  return(
  <section className={styles.servicesPage}>
    <div className={styles.wrapper}>
      <div onClick={checkClick} className={styles.carousel}>
        <Carousel width={300} height={200} xRadius={radius}>
          <label key={1} onClick={checkClick} className={styles.title} data-action="coffee">Coffee</label>
          <label key={2} onClick={checkClick} className={styles.title} data-action="way">Take a way</label>
          <label key={3} onClick={checkClick} className={styles.title} data-action="beans">Beans</label>
          <label key={4} onClick={checkClick} className={styles.title} data-action="pastry">Pastry</label>
        </Carousel>
      </div>
      <div className={styles.container}>
        <Item type={category}></Item>
        <Item type={category}></Item>
        <Item type={category}></Item>
        <Item type={category}></Item>
      </div>
    </div>
  </section>
  )
};
