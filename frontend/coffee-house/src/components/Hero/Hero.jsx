import styles from './Hero.module.scss';
import hero_img from '../../assets/png/hero.webp'
import hero_low from '../../assets/png/hero_low.png'
import { useEffect, useState, memo } from 'react';

export const Hero = memo(({ }) => {
  const [imageSrc, setImageSrc] = useState(hero_low)

  useEffect(() => {
    const img = new Image()
    img.src = hero_img
    img.onload = () => {
      setImageSrc(hero_img)
    }
  }, [hero_img])

  return(
  <section className={styles.hero}>
    <img src={imageSrc} alt='hero img' className={imageSrc === hero_low ? styles.loading : styles.loaded}/>
    <div className={styles.glov}></div>
    <div className={styles.glov2}></div>
    <div className={styles.wrapper}>
      <div className={styles.container} >
        <h1 className={styles.title}>Coffee House</h1>
        <p className={styles.description}>Today's good mood is sponsored by coffee search for your coffee now</p>
        <a href='#!' className={styles.btn}>Shop now</a>
      </div>
    </div>
  </section>
)});
  