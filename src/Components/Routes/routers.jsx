import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserHome from "../../Project/User/UserHome";
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            // Registration
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            },
            // User Dashboard
            {
                path: '/',
                element: <UserHome />
            }
        ]
    }
]);

export default routers;