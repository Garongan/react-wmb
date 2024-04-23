import useMenuService from "@/services/useMenuService";
import { useQuery } from "@tanstack/react-query";
import DataTable from "./data-table";

const Menu = () => {
    const { getAll } = useMenuService();
    const { data, isPending, isSuccess } = useQuery({ queryKey: ["menus"], queryFn: getAll });
    isPending || (!isSuccess && <div>Loading...</div>);
    return (
        <>
            <div className="space-y-4 shadow">
                <div className="p-4">
                    <DataTable data={data?.data} />
                </div>
            </div>
        </>
    );
};

export default Menu;
