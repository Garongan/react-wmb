import MonthRevenue from "./month-revenue";
import OrderDetails from "./order-details";
import OrderList from "./order-list";
import WeekRevenue from "./week-revenue";

const Dashboard = () => {
    return (
        <>
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

export default Dashboard;
