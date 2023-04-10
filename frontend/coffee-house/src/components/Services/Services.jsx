import styles from './Services.module.scss';
import coffee from '../../assets/type_of_coffee.svg'
import way from '../../assets/take_a_way.svg'
import beans from '../../assets/beans_variant.svg'
import pastry from '../../assets/pastry.svg'


export const Services = ({ }) => (
  <section className={styles.services}>
    <h1 className={styles.title}>Services</h1>
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src={coffee} alt='type of coffee'/>
          <label className={styles.description}>Type of coffee</label>
        </div>
        <div className={styles.item}>
          <img src={way} alt='take a way'/>
          <label className={styles.description}>Take a way</label>
        </div>
        <div className={styles.item}>
          <img src={beans} alt='beans variant'/>
          <label className={styles.description}>Beans variant</label>
        </div>
        <div className={styles.item}>
          <img src={pastry} alt='pastry'/>
          <label className={styles.description}>Pastry</label>
        </div>
      </div>
    </div>
  </section>
);
