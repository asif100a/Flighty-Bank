import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserHome from "../../Project/User/UserHome";
import Registration from "../Authentication/Registration";

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
            // User Dashboard
            {
                path: '/dashboard',
                element: <UserHome />
            }
        ]
    }
]);

export default routers;