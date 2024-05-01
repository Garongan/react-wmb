import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useMenuService from "@/services/useMenuService";
import PaginationComponent from "@/shared/PaginationComponent";
import {
    QueryClient,
    QueryClientProvider,
    keepPreviousData,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MenuList from "./MenuList";

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
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") || "";
    const minPrice = searchParams.get("minPrice") || "";
    const maxPrice = searchParams.get("maxPrice") || "";
    const direction = searchParams.get("direction") || "asc";
    const sortBy = searchParams.get("sortBy") || "id";
    const page = searchParams.get("page") || 1;
    const size = searchParams.get("size") || 10;
    const [paging, setPaging] = useState({
        totalPages: 0,
        totalElement: 1,
        page: page,
        size: size,
        hasNext: false,
        hasPrevious: false,
    });

    const { data, isSuccess } = useQuery({
        queryKey: [
            "menus",
            name,
            minPrice,
            maxPrice,
            direction,
            sortBy,
            page,
            size,
        ],
        queryFn: async () => {
            return await getAll({
                name: name,
                minPrice: minPrice,
                maxPrice: maxPrice,
                direction: direction,
                sortBy: sortBy,
                page: page,
                size: size,
            });
        },
        placeholderData: keepPreviousData,
        staleTime: 5000,
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

    useEffect(() => {
        if (isSuccess) {
            setPaging(data?.paginationResponse);
        }
    }, [data, isSuccess]);

    if (!isSuccess) return <div>Loading...</div>;

    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight pb-4">
                    {title}
                </h2>
            </div>
            <Link to="/dashboard/menu/new">
                <Button className="mb-4">New Menu</Button>
            </Link>
            <MenuList data={data?.data} deleteItem={deleteItem} />
            <PaginationComponent
                paging={paging}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
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
