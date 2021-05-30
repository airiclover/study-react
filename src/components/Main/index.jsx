import { Links } from "../Links";
import styles from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { useEffect } from "react";

export function Main(props) {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    </div>
  );
}
