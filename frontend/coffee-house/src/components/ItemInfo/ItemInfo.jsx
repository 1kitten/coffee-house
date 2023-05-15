import styles from './ItemInfo.module.scss';
import Spline from '@splinetool/react-spline';
import { useEffect, memo, Suspense  } from 'react';
import { useLocation } from 'react-router-dom';


export const ItemInfo =({ }) => {
  const { state } = useLocation()

  return(
  <div className={styles.itemInfo}>
    <div className={styles.wrapper}>
      <Spline scene={"https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode"} />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia totam ipsa aspernatur ut laboriosam autem tenetur error est? Animi, libero dolores. Explicabo et illo laboriosam id nisi a aperiam sint?</p>
    </div>
  </div>
)};



 