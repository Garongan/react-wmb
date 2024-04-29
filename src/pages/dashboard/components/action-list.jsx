import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { MoreHorizontal } from "lucide-react";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

const ActionList = ({ deleteItem, id }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Action deleteItem={deleteItem} id={id} />
        </QueryClientProvider>
    );
};

const Action = ({ deleteItem, id }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            deleteItem.mutate(id);
                        }}
                    >
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

ActionList.propTypes = {
    id: PropTypes.string,
    deleteItem: PropTypes.object,
};

Action.propTypes = {
    deleteItem: PropTypes.object,
    id: PropTypes.string,
};

export default ActionList;
