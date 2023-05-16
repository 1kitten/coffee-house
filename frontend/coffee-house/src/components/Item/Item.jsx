import styles from './Item.module.scss';
import coffee_1 from '../../assets/png/coffee_1.png'
import coffee_2 from '../../assets/png/coffee_2.png'
import coffee_3 from '../../assets/png/coffee_3.png'
import coffee_4 from '../../assets/png/coffee_4.png'
import pastry_1 from '../../assets/png/pastry_1.png'
import pastry from '../../assets/png/pastry.png'

import { Link } from 'react-router-dom'

export const Item = ({ type }) => {
  let img
  let title
  let scane
  
  switch(type) {
    case 'pastry':  
      img = pastry_1
      title = 'bulki'
      scane = 'https://prod.spline.design/pc6odhdUpSVcke4G/scene.splinecode'
      break
  
    case 'coffee':
      img = coffee_1
      title = 'Coffee'
      scane = 'https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode'
      break

    case 'way':  
      img = coffee_2
      title = 'bulki'
      scane = 'https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode'
      break
  
    case 'beans':
      img = coffee_3
      title = 'Coffee'
      scane = 'https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode'
      break
  }
  
  return(
  <Link to={'/info'} state={{ scane }}>
    <div className={styles.item}>
      <img className={styles.img} src={img} />
      <label  className={styles.title}>{title}</label>
    </div>
  </Link>
  )
};
