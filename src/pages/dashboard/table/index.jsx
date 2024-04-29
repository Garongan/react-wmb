import { Button } from "@/components/ui/button";
import useTableService from "@/services/useTableService";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DataTable from "./data-table";

const Index = () => {
    const { getAll } = useTableService();
    const { data, isPending, isSuccess } = useQuery({
        queryKey: ["tables"],
        queryFn: getAll,
    });

    isPending || (!isSuccess && <div>Loading...</div>);
    return (
        <>
            <Link to="/dashboard/table/new">
                <Button>New Table</Button>
            </Link>
            <DataTable data={data?.data} />
        </>
    );
};

export default Index;
