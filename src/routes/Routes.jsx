import Registration from "@/pages/auth/Registration";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Registration />,
    },
]);

export default Routes;
