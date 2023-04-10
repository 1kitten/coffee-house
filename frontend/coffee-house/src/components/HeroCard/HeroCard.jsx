import styles from './HeroCard.module.scss';
import coffee from '../../assets/png/buy.png'
import { motion } from 'framer-motion'

export const HeroCard = ({ scroll }) => {
  return(
    <motion.section 
      className={styles.heroCard }
      transition={{
        type: 'tween'
      }}
      whileHover={{translateY: '0px'}}
      animate={scroll > 100 ? {translateY: '200px'} : {translateY: '0px'}}
    >
    <img className={styles.img} src={coffee} alt='coffee'/>
    <label className={styles.label}>But first coffee</label>
    <a className={styles.btn}>Shop now</a>
     
    </motion.section>
  )  
};
