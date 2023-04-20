import logo from '../../assets/png/logo.png'
import logo_low from '../../assets/png/logo_low.png'
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';

export const Header = ({ }) => {
  const [imageSrc, setImageSrc] = useState(logo_low)

  useEffect(() => {
    const img = new Image()
    img.src = logo
    img.onload = () => {
      setImageSrc(logo)
    }
  }, [logo])

  return (
  <div className={styles.header}>
    <a className={imageSrc === logo_low ? styles.loading : styles.loaded}>
      <img src={imageSrc} alt='Coffe house' />
    </a>
    <nav className={styles.nav} title='Main navigation'>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Home</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Menu</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Services</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Product</a></li>
      </ul>
    </nav>
  </div>
)};
