import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css"
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/index.css";


const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route
      path="/"
      element={<Home />}
      loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
    />
    <Route path="*" element={<div>Page Not Found</div>} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
