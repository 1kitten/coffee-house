import styles from './Services.module.scss';
import coffee from '../../assets/type_of_coffee.svg'
import way from '../../assets/take_a_way.svg'
import beans from '../../assets/beans_variant.svg'
import pastry from '../../assets/pastry.svg'
import { motion } from 'framer-motion'

export const Services = ({ }) => {

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

  return(
  <motion.section 
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.6, once: true}}
    className={styles.services}>
    <motion.h1 
    variants={animation} className={styles.title}>Services</motion.h1>
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <motion.div variants={animationItems} custom={1} 
        whileHover={{ scale: 1.1}}   
        whileTap={{scale: 0.9}}
        className={styles.item}>
          <img src={coffee} alt='type of coffee'/>
          <label className={styles.description}>Type of coffee</label>
        </motion.div>
        <motion.div variants={animationItems} custom={2} 
        whileHover={{ scale: 1.1}}
        whileTap={{scale: 0.9}}
        className={styles.item}>
          <img src={way} alt='take a way'/>
          <label className={styles.description}>Take a way</label>
        </motion.div>
        <motion.div variants={animationItems} custom={3}
        whileHover={{ scale: 1.1}}
        whileTap={{scale: 0.9}} 
        className={styles.item}>
          <img src={beans} alt='beans variant'/>
          <label className={styles.description}>Beans variant</label>
        </motion.div>
        <motion.div variants={animationItems} custom={4}
          whileHover={{ scale: 1.1}}
          whileTap={{scale: 0.9}}
          className={styles.item}>
          <img src={pastry} alt='pastry'/>
          <label className={styles.description}>Pastry</label>
        </motion.div>
      </div>
    </div>
  </motion.section>
  )
};
