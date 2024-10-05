import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import store from "./App/store.js";
import Login from "./components/Login.jsx";
import Event from "./components/Event.jsx";
import EventDetails from "./components/EventDetails.jsx";

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login isUserAuthenticated={isUserAuthenticated} />}
        />
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} />}>
          <Route path="" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/room" element={<EventDetails />} />
         
        </Route>
      </>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
