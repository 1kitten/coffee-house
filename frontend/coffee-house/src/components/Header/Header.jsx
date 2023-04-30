import logo from '../../assets/png/logo.png'
import logo_low from '../../assets/png/logo_low.png'
import styles from './Header.module.scss';
import { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom'

export const Header = memo(({ }) => {
  const [imageSrc, setImageSrc] = useState(logo_low)

  useEffect(() => {
    const img = new Image()
    img.src = logo
    img.onload = () => {
      setImageSrc(logo)
    }
  }, [logo])

  return (
  <header className={styles.header}>
    <a className={imageSrc === logo_low ? styles.loading : styles.loaded}>
      <img src={imageSrc} alt='Coffe house' />
    </a>
    <nav className={styles.nav} title='Main navigation'>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><Link to='/' className={styles.nav_link}>Home</Link></li>
        <li className={styles.nav_item}><Link to='/menu' className={styles.nav_link}>Menu</Link></li>
        <li className={styles.nav_item}><Link to='/story' className={styles.nav_link}>Services</Link></li>
        <li className={styles.nav_item}><Link to='#!' className={styles.nav_link}>Product</Link></li>
      </ul>
    </nav>
  </header>
)});
