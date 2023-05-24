import styles from './Modal.module.scss';
import exit from '../../assets/exit.svg'

export const Modal = ({ active, setActive, data }) => (
  <div className={active ? styles.active : styles.modal} onClick={() => setActive(false)}>
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      <img className={styles.exit} src={exit} onClick={() => setActive(false)} alt={'go back'}/>
      <h2 className={styles.item_title}>{data.title}</h2>
      <p className={styles.description}>{data.content}</p>
      <img src={data.img} className={styles.img} />
    </div>
  </div>
);
