import styles from './Reserve.module.scss';
import reserve_img from '../../assets/png/reserve.png'
import date_ico from '../../assets/date.svg'
import { useForm } from 'react-hook-form'

export const Reserve = ({ }) => {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return(
  <section className={styles.reserve}>
    <div className={styles.glow_container}>
      <div className={styles.glow}></div>
      <div className={styles.glow2}></div>
    </div>
    <h1 className={styles.title}>Reserve a Table</h1>
    <div className={styles.wrapper}>
      <img src={reserve_img} className={styles.img} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.description}>To reserve a table at our coffee shop, please fill out the form below. We'll get back to you as soon as possible to confirm your reservation.</p>
        <div>
          <input {...register('date', {
            required: 'required field',
          })} className={styles.form_item} type='date'></input>
          {errors?.date && <p className={styles.error}>{errors?.date?.message || 'error'}</p>}
        </div>
        <div className={styles.form_container}>
          <div>
            <input {...register('time', {
              required: 'required field',
            })} className={styles.form_item_small} type='time'></input>
            {errors?.time && <p className={styles.error}>{errors?.time?.message || 'error'}</p>}
          </div>
          <div>
            <select {...register('guest', {
              required: 'required field',
              min: {
                value: 1,
                message: 'required field'
              },
            })} className={styles.form_item_small}>
              <option value={0}>Guest</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            {errors?.guest && <p className={styles.error}>{errors?.guest?.message || 'error'}</p>}
          </div>
        </div>
        <div>
          <input {...register('email', {
              required: 'required field',
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
            })} type='input' placeholder='your email' className={styles.form_item}/>
          {errors?.email && <p className={styles.error}>{errors?.email?.message || 'wrong email'}</p>}
        </div>
        <div>
          <input  {...register('phone', {
              required: 'required field',
              pattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i
            })} type='input' placeholder='your phone' className={styles.form_item} />
          {errors?.phone && <p className={styles.error}>{errors?.phone?.message || 'wrong phone'}</p>}
        </div>
        <div className={styles.form_container}>
          <div>
            <input  {...register('name', {
                required: 'required field',
              })} type='input' placeholder='your name' className={styles.form_item_small} />
            {errors?.name && <p className={styles.error}>{errors?.name?.message || 'error'}</p>}
          </div>
          <input disabled={!isValid} type='submit' value='Reserve' className={styles.btn}/>
        </div>
      </form>
    </div>
  </section>
)};
