import styles from './Item.module.scss';
import coffee from '../../assets/png/coffee.png'
import pastry from '../../assets/png/pastry.png'

export const Item = ({ type }) => {
  let img
  let title
  
  switch(type) {
    case 'pastry':  
      img = pastry
      title = 'bulki'
      break
  
    case 'coffee':
      img = coffee
      title = 'Coffee'
      break

    case 'way':  
      img = pastry
      title = 'bulki'
      break
  
    case 'beans':
      img = coffee
      title = 'Coffee'
      break
  }
  
  return(
  <div className={styles.item}>
    <img className={styles.img} src={img} />
    <label  className={styles.title}>{title}</label>
  </div>
  )
};
