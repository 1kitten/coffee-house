import styles from './Story.module.scss';
import story_img from '../../assets/png/story.png'
import story_img_low from '../../assets/png/story_low.png'
import story_img2 from '../../assets/png/coffee.png'
import story_img2_low from '../../assets/png/coffee_low.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

export const Story = ({ }) => { 
  const [imageSrc, setImageSrc] = useState(story_img_low)
  const [imageSrc2, setImageSrc2] = useState(story_img2_low)

  useEffect(() => {
    const img = new Image()
    img.src = story_img
    img.onload = () => {
      setImageSrc(story_img)
    }
  }, [story_img])

  useEffect(() => {
    const img = new Image()
    img.src = story_img2
    img.onload = () => {
      setImageSrc2(story_img2)
    }
  }, [story_img2])

  const animation = {
    hidden: {
      x: -100,
      opacity: 0,
      },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
      type: 'spring',
      duration: 2,
      }
    },
  }

  return(
  <section 
    className={styles.story}>
    <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.4, once: true}}
      variants={animation}
      className={styles.wrapper}>
      <h1 className={styles.title}>Our Story</h1>
        <img src={imageSrc} className={imageSrc === story_img_low ? styles.loading : styles.loaded}/>
        <img src={imageSrc2} className={imageSrc2 === story_img2_low ? styles.loading2 : styles.loaded2}/>
        <p className={styles.description}>
          Coffee House is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Coffee House has you covered - all conveniently available at the click of a button!
        </p>
  </motion.div>
</section>
)};
