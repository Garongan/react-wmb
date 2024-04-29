import useMenuService from "@/services/useMenuService";
import { useQuery } from "@tanstack/react-query";
import DataTable from "./data-table";

const Menu = () => {
    const { getAll } = useMenuService();
    const { data, isPending, isSuccess } = useQuery({
        queryKey: ["menus"],
        queryFn: getAll,
    });
    isPending || (!isSuccess && <div>Loading...</div>);
    return (
        <>
            <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                <div className="p-4">
                    <DataTable data={data?.data} />
                </div>
            </div>
        </>
    );
};

export default Menu;
