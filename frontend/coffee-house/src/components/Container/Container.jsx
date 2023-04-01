import styles from './Container.module.scss';

export const Container = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);
