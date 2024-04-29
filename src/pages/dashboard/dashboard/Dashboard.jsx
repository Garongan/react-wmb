import MonthRevenue from "./month-revenue";
import OrderDetails from "./order-details";
import OrderList from "./order-list";
import WeekRevenue from "./week-revenue";
import PropTypes from "prop-types";

const Dashboard = ({ title }) => {
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight pb-4">
                    {title}
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="grid grid-cols-1 gap-4 col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                        <WeekRevenue />
                        <MonthRevenue />
                    </div>
                    <OrderList />
                </div>
                <OrderDetails />
            </div>
        </>
    );
};

Dashboard.propTypes = {
    title: PropTypes.string,
};

export default Dashboard;
