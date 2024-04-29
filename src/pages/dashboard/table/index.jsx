import { Button } from "@/components/ui/button";
import useTableService from "@/services/useTableService";
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DataTable from "./data-table";
import { toast } from "@/components/ui/use-toast";

const queryClient = new QueryClient();

const Index = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <DataList />
        </QueryClientProvider>
    );
};

const DataList = () => {
    const queryClient = useQueryClient();
    const { getAll, deleteById } = useTableService();

    const { data, isPending, isSuccess } = useQuery({
        queryKey: ["tables"],
        queryFn: getAll,
    });

    const deleteItem = useMutation({
        mutationFn: deleteById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tables"] });
            toast.success("Table deleted successfully");
        },
    });

    isPending || (!isSuccess && <div>Loading...</div>);
    return (
        <>
            <Link to="/dashboard/table/new">
                <Button>New Table</Button>
            </Link>
            <DataTable data={data?.data} deleteItem={deleteItem} />
        </>
    );
};

export default Index;
