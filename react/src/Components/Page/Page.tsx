import React from "react";
import styles from "./PageStyles.module.scss";

interface PageProps {
  pageName: string;
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = (props) => {
  const { pageName, children } = props;

  return (
    <div className={styles.page}>
      <h1>{pageName}</h1>
      {children}
    </div>
  );
};
