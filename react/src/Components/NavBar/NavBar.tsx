import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { router } from "../../Router";
import { reduceRoutes, Route } from "./reduceRoutesToObject";
import styles from "./NavBar.module.scss";
import { useThemeStore } from "../../stores/themeStore";
import { useToggleTheme } from "../../hooks/useToggleTheme";

export const NavBar: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const { data } = useThemeStore();

  useEffect(() => {
    setRoutes(reduceRoutes(router.routes));
  }, []);

  return (
    <div className={styles.navBar}>
      <button onClick={useToggleTheme()}>
        {data.theme === "dark" ? "default" : "dark"}
      </button>
      <ul>{routes.map((route) => RenderLinks(route))}</ul>
    </div>
  );
};

const RenderLinks = (route: Route): React.ReactNode => {
  const hasChildren = route.children.length > 0;
  return hasChildren ? (
    <li key={route.name}>
      <Link to={route.path}>{route.name}</Link>
      <ul>
        {hasChildren && route.children.map((child) => RenderLinks(child))}
      </ul>
    </li>
  ) : (
    <li key={route.name}>
      <Link to={route.path}>{route.name}</Link>
    </li>
  );
};
