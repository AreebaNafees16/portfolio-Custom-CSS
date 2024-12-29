// pages/contact.js
import styles from '@/app/styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.description}>
        Have any questions or want to work together? Feel free to reach out!
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" className={styles.textarea} required />
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </section>
  );
}
