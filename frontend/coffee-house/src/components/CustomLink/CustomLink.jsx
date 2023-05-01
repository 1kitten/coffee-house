import styles from './CustomLink.module.scss';
import { motion } from 'framer-motion'
import { Link, useMatch } from 'react-router-dom'


export const CustomLink = ({ children, to, ...props}) => {
  const active = useMatch(to)

  return (
    <Link to={to} {...props} className={ active ? styles.active : styles.customLink}>
      {children}
    </Link>
    )
};

