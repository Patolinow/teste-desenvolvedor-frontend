import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import BularioPage from "./pages/BularioPage";
import SearchPage, { searchLoader } from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <BularioPage /> },
      { path: "search", element: <SearchPage />, loader: searchLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
