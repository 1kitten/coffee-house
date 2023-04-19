import styles from './Offer.module.scss';
import offer_img from '../../assets/png/offer.png'

export const Offer = ({ }) => (
  <section className={styles.offer}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Offer</h1>
      <label className={styles.title2}>Up to 50% off</label>
      <p className={styles.description}>At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness.
      </p>
      <a href='#!' className={styles.btn}>Shop now</a>
      <img src={offer_img} className={styles.img}></img>
    </div>
  </section>
);
