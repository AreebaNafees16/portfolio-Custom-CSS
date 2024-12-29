import styles from '@/app/styles/Hero.module.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Hero() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h3>Hi, Myself</h3>
        <h1>Areeba Muhammad Nafees</h1>
        <h3>And I&apos;m a <span className={styles.multipleText}>Web Developer</span></h3>
        <p>I am a dedicated Full-Stack Web Developer specializing in HTML5, CSS3, TypeScript, JavaScript, Tailwind CSS, React.js, and Next.js. I specialize in building responsive, intuitive, and dynamic websites that drive engagement and enhance user experiences. With a solid foundation in front-end and back-end technologies, I bring creative ideas to life through clean, maintainable code.</p>
        <div className={styles.socialMedia}>
          <a href="https://github.com/AreebaNafees16?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/areeba-muhammad-nafees-8561b12bb/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
        <a href="https://my-resume-psi-five.vercel.app/" className={styles.btn}>Download CV</a>
      </div>
      <div className={styles.homeImg}>
        <Image src="/profiledp.jpg" alt="Profile Picture"
          height={400}
          width={400}
          className={styles.dp}
        />
      </div>
    </section>
  );
}
