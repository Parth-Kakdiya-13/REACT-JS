import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from "./components/RootLayout"
import { Login } from "./pages/Login"
import { AssignTask } from './pages/admin/AssignTask'
import { AssignTaskProvider } from './utils/AssighTaskContext'
import { TaskLists } from './pages/admin/TaskLists'
import { AdminPanel } from './components/AdminPanel'
import { DeveloperPanel } from './components/DeveloperPanel'
import { Taks } from './pages/dev/Taks'
import { MarkAsCompleted } from './pages/dev/MarkAsCompleted'
import { MarkAsFail } from './pages/dev/MarkAsFail'
import { SelectDeveloper } from './pages/admin/SelectDeveloper'

function App() {


  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        {
          path: 'admin-dashboard', element: <AdminPanel />, children: [
            { index: true, element: <SelectDeveloper /> },
            { path: 'assigntask', element: <AssignTask /> },
            { path: 'taskslist', element: <TaskLists /> },
          ]
        },
        {
          path: 'developer-dashboard', element: <DeveloperPanel />, children: [
            { index: true, element: <Taks /> },
            { path: "complete", element: <MarkAsCompleted /> },
            { path: "fail", element: <MarkAsFail /> },
          ]
        },
      ]
    },
    { path: '/login', element: <Login /> },
  ])

  return (
    <AssignTaskProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AssignTaskProvider>
  )
}

export default App
