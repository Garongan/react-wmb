import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilePenLine, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();

const ActionList = ({ deleteItem, id }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Action deleteItem={deleteItem} id={id} />
        </QueryClientProvider>
    );
};

const Action = ({ deleteItem, id }) => {
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate(`/dashboard/table/update/${id}`);
    };

    return (
        <div className="space-x-4">
            <Button variant="outline" onClick={handleUpdate}>
                <FilePenLine className="mr-2 h-4 w-4" /> Edit
            </Button>
            <AlertDialog>
                <AlertDialogTrigger className="bg-zinc-900 text-zinc-50 inline-flex items-center justify-center rounded-md h-10 px-4 py-2">
                    <Trash2 className="h-4 w-4" />
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Apakah Anda Yakin Ingin Menghapus Data Ini?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Data yang sudah dihapus tidak dapat dikembalikan.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => {
                                deleteItem.mutate(id);
                            }}
                        >
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
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
