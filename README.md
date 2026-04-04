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

// Start Create Navbar
// Done

// Start Create Hero Section in Home Pages 
// Done

// Start About Page and Finished


// Start Create a Contact Page and Learn New Things

Step 1. How Access Form data in React19V without using useRef and useSate hooks
example 
const handleFormSubmit = (formData) => {
    const data = Object.fromEntries(formData.entries()); 
    // formData.entries() hamara data key pair ke form me lekr ata hai or uske baad usko 
    Object ki form me convert krne ke liye ham Object.fromEntries ka use krte hai
    console.log(data);
  };

  // Finished..

// Start Creat Footer 
Step 1. footer me maine thora sa logic ke sath khela hai or kux new chiz sikhi hai.

Step 2. maine Api ke under footer data name ki file bnaya or uske baad usko use krke apna footer implement kiya sabse bara tha ki mujhe uske under icons ko show krana tha jo thora muskil tha.

step 3. Sbse pahele object banao uske baad example:- const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

or isko access hako dynamic tarike se kra prega. code:- 
<div className="icon">{footerIcons[icon]}</div> 
ager smjh nhi arha hai toh ek baar code dekh lena bhai bahut jaruri hai 

// Start Country Page...
Step 1. using Axios get the data all data 
code:- 
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

Step 2. Learn new Hook useTransition() 
defination:- isme 2 chize hoti hai first jo hai isPending yah hame bata hai ki data abhi load ho raha hai ager isPending true hai toh data fetch nhi hua hai or second hota hai woh ek function hota hai is function ka use haam useEffect ke under krte hai jab data ko fetch krna hota hai or kabhi bhi useeffect ke under ham async ka use nhi kr skte hai error ata hai 

Code:- 
 const [isPending, startTransition] = useTransition(); // yah syntax hai 
  const [country, setCountry] = useState([]);
  useEffect(() => {
    startTransition(async () => {  // yaha pr startTranstion ke under call kiya hai
      const res = await getCountryData();
      console.log(res.data);
      setCountry(res.data);
    });
  }, []);
  
  if (isPending) {  // ager data load nhi hua hai toh loader dikha do 
    return <Loader />;
  }

Step 3. jab hame data fecth kr liye uske baad data ko show krwana   
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {country.map((curCountry, index) => {
          return <CountryCard curCountry={curCountry} key={index} />;
        })}
      </ul>
    </section>

// Star Create Dyanmic root 

Read Only :- means maine Country page pr ek button diya ha jispe click krne se dusra page open hota hai jo dynamic hota hai 

Step 1. {
        path: "country/:id", // :id hai : ki madat hai root dynamic ban jata hai 
        element: <CountryDetails />,
       }, iska use krke create ho jayega 

Step 2. ab mere ko jis country pr click hua hai usko details me shoe krwana hai toh use kiye mujhe spefic path pr data ko fetch krna prega uske liye ham axios ka use krenge code:- 
export const getCountryIndData = (name) => { // jaise ki maine name mujhe argument 
// mil rha hai jis se pta chel rha hai ki kon se country ka data fecth krna hai 
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`,
  );
};

Step 3. name kaise mila name hame url se mile ga usko access krne ke liya hame useParams() hook ka use krna prta hai 
code:- const params = useParams(); 
const res = await getCountryIndData(params.id); // pramas.id hame yah bata hai ki uska id ya name kya hai jis ke madat se spefic country ko search kr skte hai 


// Stat functionality in Country page..

1. Search Function and Filter Function
step 1. search function and Filter code:- 

const searchCountry = (curCountry) => {
    if (search) {
      return curCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase()); // includes ka mtlb hota hai ki jo bhi 
        //country ke name ke sath compare ho raha hia includes dekhta hai ki koi bhi
        // speling uske sath match ho raha hai lkin squence me 
    } else return curCountry;
  };

  // Filter by Region
  const filterRegion = (curCountry) => {
    if (filter === "All") return curCountry;
    return curCountry.region === filter;
  };

  // Logic of Search Filter in Input Box
  const filterCountries = country.filter(
    (curCountry) => searchCountry(curCountry) && filterRegion(curCountry),
  );

// Start Sort Asc or Des order 
Step 1. code:- 
