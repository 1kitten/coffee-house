import styles from './Recomended.module.scss';
import cart from '../../assets/cart.svg'
import arabica from '../../assets/png/arabica.png'
import house_blend from '../../assets/png/house_blend.png'
import robusta from '../../assets/png/robusta.png'
import { motion } from 'framer-motion'
import { forwardRef, memo }  from 'react'


export const Recomended = memo(({ }) => {
  
  const animation = {
    hidden: {
      opacity: 0,
      },
    visible: {
      opacity: 1,
    }
  }

  const animationItems = {
    hidden:  custom => ({
      x: -100 * custom,
      opacity: 0,
      }),
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {
      delay: custom * 0.3,
      type: 'spring',
      duration: 1,
      }
    }),
  }

  return (
  <motion.section 
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.4, once: true}}
    className={styles.recomended}>
    <motion.h1 variants={animation} className={styles.title}>Recomended</motion.h1>
    <motion.div 
    className={styles.wrapper}>
      <MItem variants={animationItems} custom={1} 
        whileHover={{ scale: 1.1}}   
        whileTap={{scale: 0.9}}
        img={arabica} name={'Arabica'}/>
      <MItem variants={animationItems} custom={2} 
        whileHover={{ scale: 1.1}}   
        whileTap={{scale: 0.9}}
        img={house_blend} name={'House blend'}/>
      <MItem variants={animationItems} custom={3} 
        whileHover={{ scale: 1.1}}   
        whileTap={{scale: 0.9}}
        img={robusta} name={'Robusta'}/>
    </motion.div>
  </motion.section>
)});

const Item = forwardRef(({ img, name }, ref) => (
  <div ref={ref} className={styles.item}>
    <img src={img} className={styles.img}/>
    <img src={cart} className={styles.cart}/>
    <div className={styles.container}>
      <span className={styles.description}>{name} | Dark Roast</span>
    </div>
  </div>
))

const MItem = motion(Item)