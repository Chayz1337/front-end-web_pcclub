import { createBrowserRouter, RouterProvider } from "../node_modules/react-router-dom/dist/index";
import { Layout } from "./components/layout/layout";
import { AdminsPage } from "./page/AdminsPage/admins";
import { ComputersPage } from "./page/ComputersPage/computers";
import { HallsPage } from "./page/HallsPage/halls";
import { VisitorsPage } from "./page/VisitorsPage/visitors";
import { ServicesPage } from "./page/ServicesPage/services";
import { VisitsPage } from "./page/VisitsPage/visits";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'admins',
        element: <AdminsPage />,
      },
      {
        path: 'visitors',
        element: <VisitorsPage />,
      },
      {
        path: 'computers',
        element: <ComputersPage />,
      },
      {
        path: 'halls',
        element: <HallsPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'visits',
        element: <VisitsPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
