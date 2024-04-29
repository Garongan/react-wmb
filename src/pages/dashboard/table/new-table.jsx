import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useTableService from "@/services/useTableService";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

const NewTable = () => {
    const service = useTableService();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onSubmit",
    });

    const onSubmit = async (data) => {
        try {
            const response = await service.create(data);
            if (response && response.statusCode === 200) {
                navigate("/dashboard/table");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Table name</FormLabel>
                            <FormControl>
                                <Input placeholder="T0..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Tambah Table Baru
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default NewTable;
