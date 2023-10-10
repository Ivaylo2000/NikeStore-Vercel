import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import Jackets from "./pages/Jackets";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Tops from "./pages/Tops";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./ReduxLogic/reduxLogic";
import ItemInfo from "./components/ItemInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/products/tops", element: <Tops /> },
      { path: "/products/pants", element: <Pants /> },
      { path: "/products/shoes", element: <Shoes /> },
      { path: "/products/jackets", element: <Jackets /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    // <ItemInfo/>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
