import Head from "next/head";
import Searcher from "../components/Searcher/index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <link
          rel="icon"
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/favicon.svg"
        />
      </Head>
      <nav>
        <Searcher></Searcher>
      </nav>
    </>
  );
}
