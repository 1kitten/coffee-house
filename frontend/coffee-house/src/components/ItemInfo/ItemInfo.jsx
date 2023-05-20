import styles from './ItemInfo.module.scss';
import { useEffect, memo, Suspense  } from 'react';
import { useLocation } from 'react-router-dom';
import { SplineItem } from '../SplineItem/SplineItem'
import { CustomBtn } from '../CustomBtn/CustomBtn'


export const ItemInfo =({ }) => {
  const { state } = useLocation()
  console.log(state)
  return(
  <div className={styles.itemInfo}>
    <div className={styles.wrapper}>
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