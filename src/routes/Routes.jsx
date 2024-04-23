import Error404 from "@/components/ui/error404";
import Login from "@/pages/auth/Login";
import RegistrationAdmin from "@/pages/auth/admin/RegistrationAdmin";
import RegistrationUser from "@/pages/auth/user/RegistrationUser";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Bills from "@/pages/dashboard/bills/Bills";
import Customers from "@/pages/dashboard/customers/Customers";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import Menu from "@/pages/dashboard/menu/Menu";
import Table from "@/pages/dashboard/table/Table";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const Routes = createBrowserRouter([
    {
        path: "*",
        element: <Error404 />,
    },
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
                <DashboardLayout />
            </ProtectedRoutes>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "table",
                element: <Table />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "customers",
                element: <Customers />,
            },
            {
                path: "bills",
                element: <Bills />,
            },
        ],
    },
]);

export default Routes;
