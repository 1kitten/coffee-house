import styles from './ItemInfo.module.scss';
import { useEffect, memo, Suspense  } from 'react';
import { useLocation } from 'react-router-dom';
import { SplineItem } from '../SplineItem/SplineItem'


export const ItemInfo =({ }) => {
  const { state } = useLocation()
  return(
  <div className={styles.itemInfo}>
    <div className={styles.wrapper}>
      <SplineItem scane={state.scane}/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia totam ipsa aspernatur ut laboriosam autem tenetur error est? Animi, libero dolores. Explicabo et illo laboriosam id nisi a aperiam sint?</p>
    </div>
  </div>
  )
};