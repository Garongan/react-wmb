import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "./components/dashboard-header";

const DashboardLayout = () => {
    const loc = useLocation();
    let title = loc.pathname.split("/").pop().toUpperCase();

    return (
        <>
            <div className="flex-col md:flex pb-10">
                <DashboardHeader />
                <div className="flex-1 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight pb-4">
                            {title}
                        </h2>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

DashboardLayout.propTypes = {
    title: PropTypes.string,
};

export default DashboardLayout;
