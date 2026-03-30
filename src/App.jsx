import { Home, About, Country, Contact } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "country",
    element: <Country />,
  },
]);

const App = () => {
  return <RouterProvider router={router}>
    
  </RouterProvider>;
};

export default App;
