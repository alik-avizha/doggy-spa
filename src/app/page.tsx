import styles from "./page.module.css";

export default function Home() {
  //TO-DO установка шрифтов
  //создание переменных на стили и размеры Typography
  // создание кастомных компонент

  return (
    <div className={styles.page}>
      <h1 data-test-id="page-title">Doggy spay</h1>
    </div>
  );
}
