import { AgnosticRouteObject } from "@remix-run/router";

export type Route = {
  name: string;
  path: string;
  children: Route[];
};

export const reduceRoutes = (routeObj: AgnosticRouteObject[]) => {
  const filteredRoutes = routeObj.reduce(
    (acc: AgnosticRouteObject[], route) => {
      if (route.path === "/") {
        acc.push(...(route.children || []));
      } else {
        acc.push(route);
      }
      return acc;
    },
    []
  );
  return filteredRoutes.map((route) => reduceRoute(route));
};

const reduceRoute = (route: AgnosticRouteObject): Route => {
  return {
    name: route.path?.split("/").pop()?.split("-").join(" ") || "",
    path: route.path || "",
    children: route.children?.map((child) => reduceRoute(child)) || [],
  };
};
