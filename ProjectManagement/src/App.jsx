import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useParams
} from "react-router-dom";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { ProjectSideBar } from "./components/ProjectSideBar";
import { SelectedProjectData } from "./components/SelectedProjectData";

function Layout() {
  // Layout is a common wrapper that always renders the sidebar on the left,
  // while the Outlet displays the route-specific component on the right.
  return (
    <div className="flex">
      <ProjectSideBar />
      <Outlet />
    </div>
  );
}

// Optionally, you can define page components that wrap your existing components,
// for instance to provide navigation callbacks if needed.
function NoProjectSelectedPage() {
  return <NoProjectSelected />;
}

function NewProjectPage() {
  return <NewProject />;
}

function SelectedProjectPage() {
  const { projectId } = useParams();
  return <SelectedProjectData projectId={projectId} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <NoProjectSelectedPage /> }, // default route
      { path: "newproject", element: <NewProjectPage /> },
      { path: "selectedproject/:projectId", element: <SelectedProjectPage /> }
    ]
  }
]);

function App() {
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
