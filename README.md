......Start Project...React Practices All Topices....

Step 1 :- Create Diffrent Types of Pages  
1. Create Pages Folder and Create All Page in Here...
2. Create Home Page About Page Contact Page and Country Page...

// Start Step React Router dom and Basic Route Setup

1. Create Router using createBrowserRouter 

example :- 
const router = createBrowserRouter([
  {
    path: "/",  // Kaha pr jana hai  
    element: <Home />, // kon sa page open krna hai 
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

2. after the create route use RouterProvider 

exmaple:- code
const App = () => {
  return <RouterProvider router={router}>
    
  </RouterProvider>;
};

3. Finished The Basic Setup of React Router Dom

// Advance React Router Dom Concept.. Start Here... 

Concept:- 1. kaise ham apne header or footer ko har page pr same rkhe step by step 
step 1. creat specific Path "/" ex:- path: "/",
step 2. create element ex:- element: <AppLayout />,
step 3. main step create Children sbse pahele children path ke under sare path ko dal do jis page pr header or footer same rhena chahiye...

exmaple:- code 
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [  // yaha pr hare path ko children ke under rkh diya hai 
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
    ],
  },
]);

Step 4. or isko access krne ke liya hame outlet ka use krna prta hai sabse pahele AppLayout ke under Header or Footer ke under outlet ka use krna padta hai 
Example :- code
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

concept 2. Handle Error Using React Router Dom 

Step1. Create ErrorElement in createBrowserRoute ke under
Example:- 
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,  // Yah hai ErroPage 
  }
]);

Step 2. Important Note 
hame ek hook milta hai react-router-dom is taraf se useRouterError
Example:- const error = useRouteError(); iske console ke under dekh skte hai isme bahut kux milta hai jaise ki err ka data error status code 

// Finishe React-Router-Dom





