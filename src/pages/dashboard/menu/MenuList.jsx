import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import PropTypes from "prop-types";
import ActionList from "../components/action-list";
import { Skeleton } from "@/components/ui/skeleton";

const MenuList = ({ data, deleteItem }) => {
    return (
        <Table>
            <TableCaption>List of Table Menu</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                            {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            }).format(item.price)}
                        </TableCell>
                        <TableCell>
                            {item.imageResponse ? (
                                <img
                                    src={item.imageResponse}
                                    alt={item.name}
                                    className="h-32 w-60 object-cover"
                                />
                            ) : (
                                <Skeleton className="h-32 w-60 rounded-xl"/>
                            )}
                        </TableCell>
                        <TableCell className="text-right">
                            <ActionList id={item.id} deleteItem={deleteItem} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

MenuList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    deleteItem: PropTypes.object,
};

export default MenuList;