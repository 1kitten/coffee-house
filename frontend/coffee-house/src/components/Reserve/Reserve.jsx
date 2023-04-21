import styles from './Reserve.module.scss';
import reserve_img from '../../assets/png/reserve.png'
import date_ico from '../../assets/date.svg'
import { useForm } from 'react-hook-form'

export const Reserve = ({ }) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  return(
  <section className={styles.reserve}>
    <div className={styles.glow_container}>
      <div className={styles.glow}></div>
      <div className={styles.glow2}></div>
    </div>
    <h1 className={styles.title}>Reserve a Table</h1>
    <div className={styles.wrapper}>
      <img src={reserve_img} className={styles.img} />
      <form className={styles.form}>
        <input className={styles.form_item} type='date'></input>
        <div className={styles.form_container}>
          <input type='time' className={styles.form_item_small} />
          <select className={styles.form_item_small}>
            <option>Guest</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <input type='input' placeholder='your email' className={styles.form_item}/>
        <input type='input' placeholder='your phone' className={styles.form_item} />
        <div className={styles.form_container}>
          <input type='input' placeholder='your name' className={styles.form_item_small}/>
          <input type='submit' value='Reserve' className={styles.btn}/>
        </div>
      </form>
    </div>
  </section>
)};
