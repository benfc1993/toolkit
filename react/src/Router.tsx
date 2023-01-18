import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Page } from "./Components/Page";
import { ContextExample } from "./Examples/stores/Context";
import { RefContextExample } from "./Examples/stores/RefContext";
import { UseAsync } from "./Examples/Hooks/UseAsync";
import { UseStorage } from "./Examples/Hooks/UseStorage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{ display: "grid", gridTemplateColumns: "0.2fr 1fr" }}>
        <NavBar />
        <Outlet />
      </div>
    ),

    children: [
      {
        path: "/stores",
        children: [
          {
            path: "/stores/context",
            element: (
              <Page pageName="Context Example">
                <ContextExample />
              </Page>
            ),
          },
          {
            path: "/stores/ref-context",
            element: (
              <Page pageName="Ref Context Example">
                <RefContextExample />
              </Page>
            ),
          },
        ],
      },
      {
        path: "/hooks",
        children: [
          {
            path: "/hooks/useAsync",
            element: (
              <Page pageName="useAsync">
                <UseAsync />
              </Page>
            ),
          },
          {
            path: "/hooks/useStorage",
            element: (
              <Page pageName="useStorage">
                <UseStorage />
              </Page>
            ),
          },
        ],
      },
    ],
  },
]);
