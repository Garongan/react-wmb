import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useMenuService from "@/services/useMenuService";
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import PaginationComponent from "@/shared/PaginationComponent";
import { useState } from "react";
import { useParams } from "react-router-dom";

const queryClient = new QueryClient();

const MenuIndex = ({ title }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <DataList title={title} />
        </QueryClientProvider>
    );
};

const DataList = ({ title }) => {
    const queryClient = useQueryClient();
    const { getAll, deleteById } = useMenuService();
    const [page, setPage] = useState(1);
    const params = useParams();

    const { data, isSuccess } = useQuery({
        queryKey: ["menus"],
        queryFn: () => getAll(params),
    });

    const deleteItem = useMutation({
        mutationFn: deleteById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["menus"] });
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Upsss! Terdapat Kesalahan Server.",
                description: error.message,
            });
        },
    });

    if (!isSuccess) return <div>Loading...</div>;

    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight pb-4">
                    {title}
                </h2>
            </div>
            <Link to="/dashboard/table/new">
                <Button>New Menu</Button>
            </Link>
            <MenuList data={data?.data} deleteItem={deleteItem} />
            <PaginationComponent paginationResponse={data?.paginationResponse} />
        </>
    );
};

MenuIndex.propTypes = {
    title: PropTypes.string,
};

DataList.propTypes = {
    title: PropTypes.string,
};

export default MenuIndex;
