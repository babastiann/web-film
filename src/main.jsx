import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/homePage";
import Movies from "./assets/pages/movies";
import TVSeries from "./assets/pages/tvseries";
import Genre from "./assets/pages/genre";
import SearchResults from "./assets/pages/searchResult";
import "./index.css";
import App from "./App";
import MovieDetailPage from "./assets/pages/movieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/movies", element: <Home /> },
      { path: "/movies/:category", element: <Movies /> },
      { path: "/tvseries", element: <Home /> },
      { path: "/tvseries/:id", element: <TVSeries /> },
      { path: "/genre", element: <Home /> },
      { path: "/genre/:id", element: <Genre /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/movieDetails/:mediaType/:id", element: <MovieDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
