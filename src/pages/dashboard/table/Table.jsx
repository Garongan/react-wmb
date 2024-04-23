import useTableService from "@/services/useTableService";
import { useQuery } from "@tanstack/react-query";
import DataTable from "./data-table";

const Table = () => {
    const { getAll } = useTableService();
    const { data, isPending, isSuccess } = useQuery({ queryKey: ["tables"], queryFn: getAll });

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

export default Table;
