import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import { ThemeProvider } from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const theme = {
  /* The following are Spotify's primary branding colors as shown in their 
  design guidelines https://developer.spotify.com/documentation/design#using-our-colors */
  green: "#1ED760",
  white: "#FFFFFF",
  black: "#121212",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
