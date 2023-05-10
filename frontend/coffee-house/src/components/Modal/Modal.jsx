import styles from './Modal.module.scss';


export const Modal = ({ active, setActive, data }) => (
  <div className={active ? styles.active : styles.modal} onClick={() => setActive(false)}>
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      <h1>{data.title}</h1>
      <p className={styles.description}>{data.content}</p>
      <img src={data.img} className={styles.description} />
    </div>
  </div>
);
