import styles from './HeroCard.module.scss';
import coffee from '../../assets/png/coffee.webp'
import coffee_low from '../../assets/png/coffee_low.png'
import { CustomBtn } from '../CustomBtn/CustomBtn'
import { motion } from 'framer-motion'
import { useEffect, useState, memo } from 'react';

export const HeroCard = memo(({ scroll }) => {
  const [imageSrc, setImageSrc] = useState(coffee_low)

  useEffect(() => {
    const img = new Image()
    img.src = coffee
    img.onload = () => {
      setImageSrc(coffee)
    }
  }, [coffee])

  return(
    <motion.section 
      className={styles.heroCard }
      transition={{
        type: 'tween'
      }}
      whileHover={{translateY: '0px'}}
      animate={scroll > 100 ? {translateY: '200px'} : {translateY: '0px'}}
    >
    <img className={imageSrc === coffee_low ? styles.loading : styles.loaded} src={imageSrc} alt='coffee'/>
    <label className={styles.label}>But first coffee</label>
    <div className={styles.btn}>
      <CustomBtn to='/services' type='medium' >Shop now</CustomBtn>
    </div>
    </motion.section>
  )  
});
