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
import TableList from "./table-list";
import PropTypes from "prop-types";
import { toast } from "@/components/ui/use-toast";

const queryClient = new QueryClient();

const Index = ({ title }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <DataList title={title} />
        </QueryClientProvider>
    );
};

const DataList = ({ title }) => {
    const queryClient = useQueryClient();
    const { getAll, deleteById } = useTableService();

    const handleGetAll = async () => {
        let data = await getAll();
        data = {
            ...data,
            name: data.data.sort((a, b) => a.name.localeCompare(b.name)),
        };
        return data;
    };

    const { data, isSuccess } = useQuery({
        queryKey: ["tables"],
        queryFn: handleGetAll,
    });

    const deleteItem = useMutation({
        mutationFn: deleteById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tables"] });
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Upsss! Terdapat Kesalahan Server.",
                description: error.message,
            });
        },
    });

    !isSuccess && <div>Loading...</div>;

    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight pb-4">
                    {title}
                </h2>
            </div>
            <Link to="/dashboard/table/new">
                <Button>New Table</Button>
            </Link>
            <TableList data={data?.data} deleteItem={deleteItem} />
        </>
    );
};

Index.propTypes = {
    title: PropTypes.string,
};

DataList.propTypes = {
    title: PropTypes.string,
};

export default Index;
