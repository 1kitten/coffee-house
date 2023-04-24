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
      transition: {
        type: "tween",
        stiffness: 260,
        damping: 10
      } 
    },
    show: { 
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 260,
        damping: 10
      }
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
          <input {...register('date', {
            required: 'required field',
            min: currDate.toDateString(),
          })} className={styles.form_item} type='date'></input>
          <AnimatePresence>
            {errors?.date && <motion.p 
              variants={item}
              initial='hidden'
              animate='show'
              exit='hidden'
            className={styles.error}>{errors?.date?.message || 'choose another date'}</motion.p>}
          </AnimatePresence>
        </div>
        <div className={styles.form_container}>
          <div>
            <input {...register('time', 
            {
              required: 'required field',
              min: '09:00',
              max: '23:00',
            })} className={styles.form_item_small} type='time'></input>
             <AnimatePresence>
              {errors?.time && <motion.p 
                variants={item}
                initial='hidden'
                animate='show'
                exit='hidden'
                className={styles.error}>{errors?.time?.message || 'choose another time'}</motion.p>}
             </AnimatePresence>
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
          <input {...register('email', {
              required: 'required field',
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
            })} type='input' placeholder='your email' className={styles.form_item}/>
            <AnimatePresence>
             {errors?.email && <motion.p 
              variants={item}
              initial='hidden'
              animate='show'
              exit='hidden'
              className={styles.error}>{errors?.email?.message || 'wrong email'}</motion.p>}
            </AnimatePresence>
        </div>
        <div>
          <input  {...register('phone', {
              required: 'required field',
              pattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i
            })} type='input' placeholder='your phone' className={styles.form_item} />
             <AnimatePresence>
              {errors?.phone && <motion.p 
                variants={item}
                initial='hidden'
                animate='show'
                exit='hidden'
                className={styles.error}>{errors?.phone?.message || 'wrong phone'}</motion.p>}
            </AnimatePresence>
        </div>
        <div className={styles.form_container}>
          <div>
            <input  {...register('name', {
                required: 'required field',
              })} type='input' placeholder='your name' className={styles.form_item_small} />
               <AnimatePresence>
                {errors?.name && <motion.p 
                  variants={item}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className={styles.error}>{errors?.name?.message || 'error'}</motion.p>}
               </AnimatePresence>
          </div>
          <input disabled={!isValid} type='submit' value='Reserve' className={styles.btn}/>
        </div>
      </form>
    </div>
  </section>
)};
