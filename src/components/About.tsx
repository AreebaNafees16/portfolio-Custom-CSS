
import Image from 'next/image';
import styles from '@/app/styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left side: Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/aboutpic.png" // Update with the actual image path
            alt="areeba"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>

        {/* Right side: About Text */}
        <div className={styles.textContainer}>
          <h1>About Me</h1>
          <p>
            Hi! I am a Areeba Muhammad Nafees, as a passionate web developer with a focus on building responsive, user-friendly, and visually appealing websites. With expertise in HTML, CSS, JavaScript, TypeScript and modern frameworks like Tailwind and Next.js, I bring creativity and functionality together to craft seamless digital experiences. I enjoy solving problems and creating meaningful projects. I am constantly learning new things and love collaborating on exciting projects. In my free time, I like to explore the latest trends in web development and contribute to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}

