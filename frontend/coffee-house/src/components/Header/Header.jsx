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
    <Logo />
      <nav>
        <ul>
          <li><a href='#!'>Home</a></li>
          <li><a href='#!'>Menu</a></li>
          <li><a href='#!'>Services</a></li>
          <li><a href='#!'>Product</a></li>
          <li><a href='#!'>Contact</a></li>
        </ul>
      </nav>
  </div>
);
