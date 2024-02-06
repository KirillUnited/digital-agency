"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import validator from "validator";
import { cn } from "@/lib/utils"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Имя должно состоять минимум из 2 символов.",
    }),
    userphone: z.string().refine(validator.isMobilePhone, {
        message: "Неверный номер телефона.",
    }),
})

interface OrderFormProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export default function OrderForm({ className }: OrderFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            userphone: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(`
        Имя: ${values.username} \n
        Телефон: ${values.userphone}
        `)
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8", className)}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Введите Ваше имя" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="userphone"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Телефон</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="Введите Ваш номер телефона" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </>
                    )}
                />
                <Button type="submit" className="w-full">Заказать звонок</Button>
            </form>
        </Form>
    )
}
