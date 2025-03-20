import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import StudentTable from './components/StudentTable.jsx'
import StudentCreate from './components/StudentCreate.jsx'
import StudnentEdit from './components/StudnentEdit.jsx'
import StudentView from './components/StudentView.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/', 
      element: <StudentTable />,

    },
    {
      path: '/student/create/:id', 
      element: <StudentCreate />,

    },
    {
      path: '/student/edit/:studentId', 
      element: <StudnentEdit />,

    },
    {
      path: '/student/view/:id', 
      element: <StudentView />,

    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
