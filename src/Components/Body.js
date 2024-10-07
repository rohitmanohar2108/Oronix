
import GetStarted from "./GetStarted";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MyWishList from "./MyWishList";


const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <GetStarted />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/mywishlist",
      element: <MyWishList />
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
