import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../category/CategoryPage";
import SearchPage from "../pages/search/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/categories/:categoryName", element: <CategoryPage /> },
            { path: "/search", element: <SearchPage /> },
            { path: "/about", element: <h1>About</h1> },
        ],
    },
]);

export default router;