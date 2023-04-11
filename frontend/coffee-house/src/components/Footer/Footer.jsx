import styles from './Footer.module.scss';
import footer_bg from '../../assets/png/footer.png'
import footer_img from '../../assets/png/footer_img.png'
import location from '../../assets/location.svg'
import email from '../../assets/footer_email.svg'
import phone from '../../assets/footer_phone.svg'


export const Footer = ({ }) => (
  <footer className={styles.footer}>
    <img src={footer_bg} className={styles.bg} />
    <img src={footer_img} alt='footer img' className={styles.img} />
    <ul className={styles.about}>
      <span>About</span>
      <li><a className={styles.item} href='#'>Our Story</a></li>
      <li><a className={styles.item} href='#'>FAQ</a></li>
      <li><a className={styles.item} href='#'>Careers</a></li>
    </ul>
    <ul className={styles.customer}>
      <span>Customers recourses</span>
      <li><a className={styles.item} href='#'>Menu</a></li>
      <li><a className={styles.item} href='#'>Locations</a></li>
      <li><a className={styles.item} href='#'>Support</a></li>
    </ul>
    <ul className={styles.services}>
      <span>Services</span>
      <li><a className={styles.item} href='#'>Payment Options</a></li>
      <li><a className={styles.item} href='#'>Refunds & Exchanges</a></li>
      <li><a className={styles.item} href='#'>Limitation of Liability</a></li>
    </ul>
    <ul className={styles.contact}>
      <li><img src={location} /><a className={styles.item} href='#'> 12 jhon Avenue #35 - new York </a></li>
      <li><img src={email} /><a className={styles.item} href='#'> coffeehouse@coffee.com</a></li>
      <li><img src={phone} /><a className={styles.item} href='#'> +1-222-333-444</a></li>
    </ul>
    <div className={styles.desing}>
      <label>Design created By Elinaui9</label>
      <label>Copyright 2023 Eliza Coffee . All rights reserved.</label>
    </div >
  </footer>
);
