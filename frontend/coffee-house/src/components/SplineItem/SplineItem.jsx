import styles from './SplineItem.module.scss';

import Spline from '@splinetool/react-spline';

export const SplineItem = ({ scane }) => {
  console.log(scane)
  return(
  <div className={styles.splineItem}>
    <Spline scene={scane} />
  </div>
)};


