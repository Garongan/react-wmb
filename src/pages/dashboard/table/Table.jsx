import { Outlet } from "react-router-dom";

const Table = () => {
    return (
        <>
            <div className="space-y-4 shadow">
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Table;
