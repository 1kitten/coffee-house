import styles from './Blog.module.scss';
import bg from '../../assets/png/bg_blog.png'
import blog_1 from '../../assets/png/blog_1.png'
import blog_2 from '../../assets/png/blog_2.png'
import blog_3 from '../../assets/png/blog_3.png'
import { memo, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const Blog = memo(({ }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth +30)
  }, [])

  return(
  <section className={styles.blog}>
    <h1 className={styles.title}>Our Blog</h1>

    <motion.div ref={carousel} className={styles.wrapper} whileTap={'grabbing'}>
      <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className={styles.carousel}>

        <BlogItem title='How to make a great coffe' img={blog_1} > Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would! </BlogItem>

        <BlogItem title='Different types of coffee explained' img={blog_2} > Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you’re spoilt for choice. To help beginners navigate their first foray into the world of coffee, let’s breakdown some basic categories: Espresso is an especially intense type of brewed coffee made by forcing pressurized water through finely ground beans. It has a strong flavor and can be used to make all manner of delicious drinks like flat whites, cappuccinos and lattes. Filter coffee is made with a paper filter that holds back most grounds before allowing the liquid to drip down into your cup. Its taste is less intense than that of espresso but still robust enough to serve with milk or flavored syrups if desired. Cold brew on the other hand isn't actually brewed using heat but rather steeped in cold water overnight to produce a smooth yet sweet drink - great over ice! Finally there's nitro which takes cold brew and injects it (through nitrogen) with carbon dioxide for an even creamier texture and slightly sweet flavor profile. No matter what you choose, chances are you won't be disappointed! </BlogItem>

        <BlogItem title='Why does caffeine make us stay awake' img={blog_3} > Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake </BlogItem>

      </motion.div>
    </motion.div>
  </section>
)})

const BlogItem = ({ children, title, img }) => (
  <div className={styles.item}>
    <h2 className={styles.item_title}>{title}</h2>
    <p className={styles.description}>{children}</p>
    <img className={styles.img} src={img} />
  </div>
)