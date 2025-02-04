import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../category/CategoryPage";
import SearchPage from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/categories/:categoryName", element: <CategoryPage /> },
            { path: "/search", element: <SearchPage /> },
            { path: "/shop", element: <ShopPage /> },
            { path: "/about", element: <h1>About</h1> },
        ],
    },
]);

export default router;