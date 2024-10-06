
import GetStarted from "./GetStarted";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";


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
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
