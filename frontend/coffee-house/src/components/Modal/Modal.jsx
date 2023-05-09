import styles from './Modal.module.scss';


export const Modal = ({ active, setActive }) => (
  <div className={active ? styles.active  : styles.modal} onClick={() => setActive(false)}>
    <div className={styles.content}  onClick={e => e.stopPropagation()}>

    </div>
  </div>
);
