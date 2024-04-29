import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import PropTypes from "prop-types";
import ActionList from "../components/action-list";

const DataTable = ({ data }) => {
    return (
        <Table>
            <TableCaption>List of Table Menu</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(item.price)}</TableCell>
                        <TableCell className="text-right">
                            <ActionList />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

DataTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default DataTable;
