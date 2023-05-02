import logo from '../../assets/png/logo.png'
import logo_low from '../../assets/png/logo_low.png'
import styles from './Header.module.scss'
import { CustomLink } from '../CustomLink/CustomLink'
import { useEffect, useState, memo } from 'react';


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
    <CustomLink to='/' >Home</CustomLink>
    <CustomLink to='/menu' >Menu</CustomLink>
    <CustomLink to='/services' >Services</CustomLink>
    <CustomLink to='/asd' >Product</CustomLink>
    </nav>
  </header>
)});
