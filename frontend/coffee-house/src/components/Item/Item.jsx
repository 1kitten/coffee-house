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
  let price
  
  switch(type) {
    case 'pastry':  
      img = pastry_1
      title = 'bulki'
      scane = 'https://prod.spline.design/pc6odhdUpSVcke4G/scene.splinecode'
      price = 20.00
      break
  
    case 'coffee':
      img = coffee_1
      title = 'Coffee'
      scane = 'https://prod.spline.design/F4x-qvtw6z9uSYOo/scene.splinecode'
      price = 5.00
      break

    case 'way':  
      img = coffee_2
      title = 'bulki'
      scane = 'https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode'
      price = 15.00
      break
  
    case 'beans':
      img = coffee_3
      title = 'Coffee'
      scane = 'https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode'
      price = 10.00
      break
  }
  
  return(
  <Link to={'/info'} state={{ scane, title, price }}>
    <div className={styles.item}>
      <img className={styles.img} src={img} />
      <label className={styles.title}>{title}</label>
      <label className={styles.title}>{price} $</label>
    </div>
  </Link>
  )
};
