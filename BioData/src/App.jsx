import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Home } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Templates } from "./Pages/Templates";
import { SubTemplate } from "./Pages/SubTemplate";



function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />, children: [
        { path: "/", index: true, element: <Home /> },
        { path: "/templates", element: <Templates /> },
        { path: "/templates/:id", element: <SubTemplate /> },
      ]
    }
  ])


  return (
    <div className="mx-10 md:mx-20 lg:mx-30 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
