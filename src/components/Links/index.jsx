import styles from "src/components/Links/Links.module.css";

export const Links = (props) => {
  return (
    <div className={styles.grid}>
      {props.items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.discription}</p>
          </a>
        );
      })}
    </div>
  );
};
