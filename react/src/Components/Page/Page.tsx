import React from "react";
import styles from "./PageStyles.module.scss";
import { useHoverTooltip } from "../../Tools/hooks/useTooltip";

interface PageProps {
  pageName: string;
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = (props) => {
  const { pageName, children } = props;

  const { ref, Tooltip } = useHoverTooltip("Page Title");
  return (
    <div className={styles.page}>
      <h1 ref={ref}>{pageName}</h1>
      <Tooltip />
      {children}
    </div>
  );
};
