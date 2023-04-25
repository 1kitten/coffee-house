import styles from './Reserve.module.scss';
import reserve_img from '../../assets/png/reserve.png'

import { motion, AnimatePresence } from 'framer-motion'
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
    mode: "onChange"
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  const item = {
    hidden: { 
      opacity: 0,
    },
    show: { 
      opacity: 1,
    }
  }

  const currDate = new Date()
  currDate.setDate(currDate.getDate() + 1)

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
          <FormItem register={register} errors={errors} item={item} name={'date'} type={'date'}
          className={styles.form_item} eMessage={'choose another date'} min={currDate.toDateString()}/>
        </div>
        <div className={styles.form_container}>
          <div>
            <FormItem register={register} errors={errors} item={item} name={'time'} type={'time'}
            className={styles.form_item_small} eMessage={'choose another time'} min={'09:00'} max={'23:00'}/>
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
            <AnimatePresence>
              {errors?.guest && <motion.p 
                variants={item}
                initial='hidden'
                animate='show'
                exit='hidden'
                className={styles.error}>{errors?.guest?.message || 'error'}</motion.p>}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <FormItem register={register} errors={errors} item={item} name={'email'} type={'input'} placeholder={'your email'}
          className={styles.form_item} pattern={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i} eMessage={'wrong email'} />
        </div>
        <div>
          <FormItem register={register} errors={errors} item={item} name={'phone'} type={'input'} placeholder={'your phone'}
          className={styles.form_item} pattern={/^([+]?[0-9\s-\(\)]{3,25})*$/i} eMessage={'wrong phone'} />
        </div>
        <div className={styles.form_container}>
         <FormItem register={register} errors={errors} item={item} name={'name'} type={'input'} placeholder={'your name'} 
          className={styles.form_item_small} />
          <input disabled={!isValid} type='submit' value='Reserve' className={styles.btn}/>
        </div>
      </form>
    </div>
  </section>
)};

const FormItem = ({ register, errors, item, type, name, placeholder, className, eMessage, pattern, min, max}) => {

  return (
    <div>
      <input  {...register(name, {
          required: 'required field',
          pattern: pattern,
          min: min,
          max: max,
        })} 
        type={type} placeholder={placeholder} className={className} />
          <AnimatePresence>
          {errors[name] && <motion.p 
            variants={item}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={styles.error}>{errors[name]?.message || eMessage || 'error' }</motion.p>}
          </AnimatePresence>
    </div>
  )
}