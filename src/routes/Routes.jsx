import RegistrationAdmin from "@/pages/auth/admin/RegistrationAdmin";
import RegistrationUser from "@/pages/auth/user/RegistrationUser";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <h2>Home</h2>,
    },
    {
        path: "/register",
        element: <RegistrationUser />,
        children: [
            {
                index: true,
                element: <RegistrationUser />,
            },
            {
                path: "admin",
                element: (
                    <ProtectedRoutes path="register.admin">
                        <RegistrationAdmin />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <h2>Home</h2>,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoutes>
                <Dashboard />
            </ProtectedRoutes>
        ),
    },
]);

export default Routes;
