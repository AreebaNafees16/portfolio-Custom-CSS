import About from "@/components/About";
import styles from '@/app/styles/Page.module.css';


export default function Page() {
  return (
    <main className={styles.main}>
       <div className={styles.aboutSection}>
      <About />
    </div>
  </main>

  );
}