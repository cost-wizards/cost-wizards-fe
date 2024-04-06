import React from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import AccountSetup from "./pages/AccountSetup";
import AccountOverview from "./pages/AccountOverview";
import AccountDetails from "./pages/AccountDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/account-setup",
    element: <AccountSetup />,
  },
  {
    path: "/account-overview",
    element: <AccountOverview />,
  },
  {
    path: "/account-details",
    element: <AccountDetails />,
  },
]);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>,
);
