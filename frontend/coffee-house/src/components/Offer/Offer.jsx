import styles from './Offer.module.scss';
import offer_img from '../../assets/png/offer.png'
import { memo } from 'react'
import { motion } from 'framer-motion'


export const Offer = memo(({ }) => {
  
  const animation = {
    hidden: {
      opacity: 0,
      x: 100
      },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
      type: 'spring',
      duration: 2,
      }
    },
  }

  return(
  <section className={styles.offer}>
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.6, once: true}}
      variants={animation}
      className={styles.wrapper}>
      <h1 className={styles.title}>Offer</h1>
      <label className={styles.title2}>Up to 50% off</label>
      <p className={styles.description}>At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness.
      </p>
      <a href='#!' className={styles.btn}>Shop now</a>
      <img src={offer_img} className={styles.img}></img>
    </motion.div>
  </section>
  )
});
