import styles from './CustomBtn.module.scss';
import { Link } from 'react-router-dom'


export const CustomBtn = ({ children, to, type, ...props}) => {

  return (
    <Link to={to} {...props} className={ styles[type]}>
      {children}
    </Link>
    )
};
