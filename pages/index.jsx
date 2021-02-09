import Head from "next/head";
import styles from "../styles/Home.module.css";
import Searcher from "../components/Searcher/index";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercado Libre</title>
        <link
          rel="icon"
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/favicon.svg"
        />
      </Head>
      <nav className={styles.nav}>
        <Searcher></Searcher>
      </nav>
    </div>
  );
}
