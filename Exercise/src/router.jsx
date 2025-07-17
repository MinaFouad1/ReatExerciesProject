import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./Components/layout";

const routers = createBrowserRouter([
//   //Login
//   {
//     path: "/",
//     element: <Login />, // Login route is independent
//   },
  //Dashboard
  {
    element: <Layout/>,
    children: [
      //Home
      {
        path: "/",
        element: <Home />,
      },
      //Master Data
      {
        path: "MovieDetails/:id", // should be the path for Customers changes
        element: <MovieDetails />,
      },
      {
        path: "Movies",
        element: <Movies />,
      }
     
    ],
  },
]);
export default routers;