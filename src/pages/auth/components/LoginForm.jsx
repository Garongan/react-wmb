import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthService from "@/services/useAuthService";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const schema = z.object({
    username: z.string().min(4, {
        message: "Username is required",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
});

const LoginForm = () => {

    const service = useAuthService();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onChange"
    });

    const onSubmit = async (data) => {
        try {
            const response = await service.login(data);
            if (response && response.statusCode === 200){
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Input username here..." {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        type="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Input password here..." {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full my-2" disabled={!form.formState.isValid}>
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default LoginForm;
