import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/image/site/pp/aether.jpg" alt="Asura" width={300} height={300} />
      </div>
      <h1>Yo je moi c'est Asura </h1>
      <p>Ready à  parler de mangas et jeux  </p>
    </section>)
}
export default Hero;