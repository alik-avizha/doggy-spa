import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 data-test-id="page-title">Doggy spay</h1>
    </div>
  );
}
