import styles from './Item.module.scss';
import coffee_1 from '../../assets/png/coffee_1.png'
import coffee_2 from '../../assets/png/coffee_2.png'
import coffee_3 from '../../assets/png/coffee_3.png'
import way_1 from '../../assets/png/way_1.png'
import way_2 from '../../assets/png/way_2.png'
import way_3 from '../../assets/png/way_3.png'
import pastry_1 from '../../assets/png/pastry_1.png'
import pastry_2 from '../../assets/png/pastry_2.png'
import pastry_3 from '../../assets/png/pastry_3.png'
import arabica from '../../assets/png/arabica.png'
import robusta from '../../assets/png/robusta.png'
import house_blend from '../../assets/png/house_blend.png'


import { Link } from 'react-router-dom'

let itemsArr

let itemsWay = [
  {
    img: way_1,
    title: 'Espresso',
    scane: 'https://prod.spline.design/eukNsE3y7kC21cy1/scene.splinecode',
    price: 20,
  },
  {
    img: way_2,
    title: 'Americano',
    scane: 'https://prod.spline.design/S2PXRRcrUvISGTdJ/scene.splinecode',
    price: 25,
  },
  {
    img: way_3,
    title: 'Cappuccino',
    scane: 'https://prod.spline.design/hPTgc06xjbRfg350/scene.splinecode',
    price: 25,
  },
]

let itemsPastry = [
  {
    img: pastry_1,
    title: 'Honey cake',
    scane: 'https://prod.spline.design/pc6odhdUpSVcke4G/scene.splinecode',
    price: 15,
  },
  {
    img: pastry_2,
    title: 'Strawberry paradise',
    scane: 'https://prod.spline.design/X-krRXjUOp1i-GqA/scene.splinecode',
    price: 25,
  },
  {
    img: pastry_3,
    title: 'Donut',
    scane: 'https://prod.spline.design/RxLbBEYUFglt1ans/scene.splinecode',
    price: 10,
  },
]

let itemsCoffee = [
  {
    img: coffee_1,
    title: 'Espresso',
    scane: 'https://prod.spline.design/I62Y1blxIWecXlcB/scene.splinecode',
    price: 15,
  },
  {
    img: coffee_2,
    title: 'Americano',
    scane: 'https://prod.spline.design/dX-IX4BgRge3HGQ7/scene.splinecode',
    price: 25,
  },
  {
    img: coffee_3,
    title: 'Cappuccino',
    scane: 'https://prod.spline.design/A9FnezQq1KX50de6/scene.splinecode',
    price: 10,
  },
]

let itemsBeans = [
  {
    img: arabica,
    title: 'Arabica',
    scane: 'https://prod.spline.design/6RgGn0ITE-fAvs4M/scene.splinecode',
    price: 15,
  },
  {
    img: robusta,
    title: 'Americano',
    scane: 'https://prod.spline.design/8Ob9c7KAwo1BPl2w/scene.splinecode',
    price: 25,
  },
  {
    img: house_blend,
    title: 'Cappuccino',
    scane: 'https://prod.spline.design/cCdytxrP6p2KIHaQ/scene.splinecode',
    price: 10,
  },
]



export const Item = ({ type }) => {

  switch(type) {
    case 'pastry':
      itemsArr = itemsPastry
      break
  
    case 'coffee':
      itemsArr = itemsCoffee
      break

    case 'way':  
      itemsArr = itemsWay
      break
  
    case 'beans':
      itemsArr = itemsBeans
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
