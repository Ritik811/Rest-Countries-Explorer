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




