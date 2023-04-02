import styles from './Hero.module.scss';
import hero_img from '../../assets/png/hero.png'


export const Hero = ({ }) => (
  <section className={styles.hero}>
    <img src={hero_img} className={styles.img}/>
    <div className={styles.glov}></div>
    <div className={styles.glov2}></div>
    <div className={styles.wrapper}>
      <div className={styles.container} >
        <h1 className={styles.title}>Coffe House</h1>
        <p className={styles.description}>Today's good mood is sponsored by coffee search for your coffee now</p>
        <a href='#!' className={styles.btn}>Shop now</a>
        <a href='#!' className={styles.btn}>Catalog</a>
      </div>
    </div>
  </section>
);
