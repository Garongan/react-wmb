import Error404 from "@/components/ui/error404";
import Login from "@/pages/auth/Login";
import Registration from "@/pages/auth/Registration";
import Register from "@/pages/auth/components/Register";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Bills from "@/pages/dashboard/bills/Bills";
import Customers from "@/pages/dashboard/customers/Customers";
import Dashboard from "@/pages/dashboard/dashboard/Dashboard";
import MenuForm from "@/pages/dashboard/menu/MenuForm";
import MenuIndex from "@/pages/dashboard/menu/MenuIndex";
import MenuLayout from "@/pages/dashboard/menu/MenuLayout";
import TableForm from "@/pages/dashboard/table/TableForm";
import TableIndex from "@/pages/dashboard/table/TableIndex";
import TableLayout from "@/pages/dashboard/table/TableLayout";
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
        element: <Registration />,
        children: [
            {
                index: true,
                element: <Register title="user" isAdmin={false} />,
            },
            {
                path: "admin",
                element: (
                    <ProtectedRoutes path="register/admin">
                        <Register title="admin" isAdmin={true} />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: (
            <ProtectedRoutes>
                <Login />
            </ProtectedRoutes>
        ),
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
                element: <Dashboard title="Dashboard" />,
            },
            {
                path: "table",
                element: <TableLayout />,
                children: [
                    {
                        index: true,
                        element: <TableIndex title="Table" />,
                    },
                    {
                        path: "new",
                        element: <TableForm title="Table Form" />,
                    },
                    {
                        path: "update/:id",
                        element: <TableForm title="Updata Table Form" />,
                    },
                ],
            },
            {
                path: "menu",
                element: <MenuLayout />,
                children: [
                    {
                        index: true,
                        element: <MenuIndex title="Menu" />,
                    },
                    {
                        path: "new",
                        element: <MenuForm title="Menu Form" />,
                    },
                    {
                        path: "update/:id",
                        element: <MenuForm title="Update Menu Form" />,
                    },
                ],
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
