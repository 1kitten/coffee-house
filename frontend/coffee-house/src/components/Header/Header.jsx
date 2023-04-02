import { Container } from '../Container/Container';
import ILogo from '../../assets/png/logo.png'
import styles from './Header.module.scss';

const Logo = () => {
  return (
    <img src={ILogo} />
  )
}

export const Header = ({ }) => (
  <div className={styles.header}>
    <a className={styles.logo}>
      <img src={ILogo} alt='Coffe house' />
    </a>
    <nav className={styles.nav} title='Main navigation'>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Home</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Menu</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Services</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Product</a></li>
        <li className={styles.nav_item}><a href='#!' className={styles.nav_link}>Contact</a></li>
      </ul>
    </nav>
  </div>
);
