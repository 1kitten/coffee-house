import styles from './ServicesPage.module.scss';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-carousel3';
import { Item } from '../Item/Item'
import { useLocation } from 'react-router-dom';

export const ServicesPage = ({ }) => {
  const { state } = useLocation()
  console.log(state)
  let radius = window.innerWidth
  const [category, setCategory] = useState(state?.category ? state.category : 'coffee')

  if (window.innerWidth > 1000) {
    radius = 500
  } else if (1000 > window.innerWidth  && window.innerWidth > 600) {
    radius = 300
  } else {
    radius = 100
  }

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        document.getElementById(state.category).click();
      }, 0);
    }
  }, [])

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
          <label key={1} id={'coffee'} onClick={checkClick} className={styles.title} data-action="coffee">Coffee</label>
          <label key={2} id={'way'} onClick={checkClick} className={styles.title} data-action="way">Take a way</label>
          <label key={3} id={'beans'} onClick={checkClick} className={styles.title} data-action="beans">Beans</label>
          <label key={4} id={'pastry'} onClick={checkClick} className={styles.title} data-action="pastry">Pastry</label>
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
