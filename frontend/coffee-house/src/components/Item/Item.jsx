import styles from './Item.module.scss';
import coffee_1 from '../../assets/png/coffee_1.png'
import coffee_2 from '../../assets/png/coffee_2.png'
import coffee_3 from '../../assets/png/coffee_3.png'
import coffee_4 from '../../assets/png/coffee_4.png'
import pastry_1 from '../../assets/png/pastry_1.png'
import arabica from '../../assets/png/arabica.png'
import pastry from '../../assets/png/pastry.png'

import { Link } from 'react-router-dom'

let itemsArr

let itemsCoffee = [
  {
    img: coffee_1,
    title: 'Espresso',
    scane:'https://prod.spline.design/hPTgc06xjbRfg350/scene.splinecode',
    price: 20,
  },
  {
    img: coffee_2,
    title: 'Americano',
    scane:'https://prod.spline.design/5nJW7IwJvU7Y07Zy/scene.splinecode',
    price: 25,
  },
  {
    img: coffee_3,
    title: 'Cappuccino',
    scane:'https://prod.spline.design/pc6odhdUpSVcke4G/scene.splinecode',
    price: 25,
  },
]

export const Item = ({ type }) => {

  switch(type) {
    case 'pastry':
      itemsArr = [{
        img: pastry_1,
        title: 'Pastry',
        scane: 'https://prod.spline.design/pc6odhdUpSVcke4G/scene.splinecode',
        price: 20,
      }]
      break
  
    case 'coffee':
      itemsArr = itemsCoffee
      break

    case 'way':  
    itemsArr = [{
      img: coffee_3,
      title: 'Way',
      scane:'https://prod.spline.design/5nJW7IwJvU7Y07Zy/scene.splinecode',
      price: 15
    }]
     
      break
  
    case 'beans':
      itemsArr = [{
        img: arabica,
        title: 'Beans',
        scane: 'https://prod.spline.design/Dj2et5rdCMsWrGd4/scene.splinecode',
        price: 10
      }]
      break
  }
  
  return(
    <>
      {itemsArr.map((key)=>(
        <Link to={'/info'} state={ {scane: key.scane, title: key.title, price: key.price} }>
          <div key={key.title} className={styles.item}>
            <img className={styles.img} src={key.img} />
            <label className={styles.title}>{key.title}</label>
            <label className={styles.price}>${key.price}</label>
          </div>
        </Link>
      ))}
    </>
  )
};
