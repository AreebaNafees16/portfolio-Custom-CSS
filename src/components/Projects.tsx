// Projects.js
'use client';

import Link from 'next/link';
import styles from '@/app/styles/Projects.module.css';

const projectData = [
  { id: 1, title: "Restaurant Website", description: "Description for Project One", image: '/pic1.jpg', link: 'https://restaurant-website-puce-theta.vercel.app/' },
  { id: 2, title: "Portfolio Website", description: "Description for Project Two", image: '/portfolio.jpg', link: '/projects/project1' },
  { id: 3, title: "Simple Calculator", description: "Description for Project Three", image: '/cal.jpg', link: 'https://calculator-project-nu-six.vercel.app/' },
  { id: 4, title: "Travel Website", description: "Description for Project Four", image: '/travel.jpg', link: 'https://travel-website-teal-ten.vercel.app/' },
  { id: 5, title: "Coffee Shop Website", description: "Description for Project Five", image: '/coffeeshop.jpg', link: 'https://bean-journey.vercel.app/' },
  { id: 6, title: "Static Resume", description: "Description for Project Six", image: '/my resume.webp', link: 'https://my-resume-psi-five.vercel.app/' },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.grid}>
        {projectData.map((project:any, index :any) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.image} />
            </div>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <Link href={project.link} className={styles.projectLink}>
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

