import Head from "next/head";
import { useBgLightBkuse } from "src/hooks/useBgLightBkuse";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBkuse();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
