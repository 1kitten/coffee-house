import styles from './ItemInfo.module.scss';
import { useEffect, memo, Suspense  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SplineItem } from '../SplineItem/SplineItem'
import { CustomBtn } from '../CustomBtn/CustomBtn'
import exit from '../../assets/exit.svg'

export const ItemInfo =({ }) => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return(
  <div className={styles.itemInfo}>
    <div className={styles.wrapper}>
      <img className={styles.exit} src={exit} onClick={goBack} alt={'go back'}/>
      <SplineItem scane={state.scane}/>
      <div className={styles.item}>
        <h2 className={styles.title}>{state.title}</h2>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia totam ipsa aspernatur ut laboriosam autem tenetur error est? Animi, libero dolores. Explicabo et illo laboriosam id nisi a aperiam sint?</p>
        <div className={styles.buy}>
          <label className={styles.price}>${state.price}</label>
          <CustomBtn to='/' type='buy' >Buy</CustomBtn>
        </div>
      </div>
    </div>
  </div>
  )
};