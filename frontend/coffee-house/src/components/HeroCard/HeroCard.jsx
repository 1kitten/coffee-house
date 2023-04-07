import styles from './HeroCard.module.scss';
import coffee from '../../assets/png/buy.png'



export const HeroCard = ({ }) => {
  return(
    <div className={styles.heroCard }>
      <img className={styles.img} src={coffee} alt='coffee'/>
      <label className={styles.label}>But first coffee</label>
      <a className={styles.btn}>Shop now</a>
    </div>
  )  
};
