import styles from './Story.module.scss';
import story_img from '../../assets/png/story.png'
import story_img2 from '../../assets/png/coffee.png'


export const Story = ({ }) => (
  <section className={styles.story}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Our Story</h1>
        <img src={story_img} className={styles.img}/>
        <img src={story_img2} className={styles.img2}/>
        <p className={styles.description}>
          Coffee House is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Coffee House has you covered - all conveniently available at the click of a button!
        </p>
  </div>
</section>
);
