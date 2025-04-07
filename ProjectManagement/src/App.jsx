import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from "./components/RootLayout"
import { Login } from "./pages/Login"
import { AssignTask } from './pages/AssignTask'
import { AssignTaskProvider } from './utils/AssighTaskContext'
import { TaskLists } from './pages/TaskLists'
import { AdminPanel } from './components/AdminPanel'
import { DeveloperPanel } from './components/DeveloperPanel'
import { Taks } from './pages/dev/Taks'
import { MarkAsCompleted } from './pages/dev/MarkAsCompleted'
import { MarkAsFail } from './pages/dev/MarkAsFail'
import { SelectDeveloper } from './pages/SelectDEveloper'

function App() {


  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        {
          path: 'admin', element: <AdminPanel />, children: [
            { index: true, element: <SelectDeveloper /> },
            { path: 'assigntask', element: <AssignTask /> },
            { path: 'taskslist', element: <TaskLists /> },
          ]
        },
        {
          path: 'developer', element: <DeveloperPanel />, children: [
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
