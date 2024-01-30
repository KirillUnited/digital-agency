"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Имя должно состоять минимум из 2 символов.",
    }),
    userphone: z.string().min(2, {
        message: "Неверный номер телефон.",
    }),
})

export default function OrderForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            userphone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        alert(`
        Имя: ${values.username} \n
        Телефон: ${values.userphone}
        `)
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите Ваше имя" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="userphone"
                    rules={{
                        validate: (value) => isValidPhoneNumber(value)
                    }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Телефон</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите Ваш номер телефона" {...field} />
                            </FormControl>
                            <PhoneInput
                                value={field.value}
                                onChange={field.onChange}
                                defaultCountry="BY"
                                id="userphone"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {form.formState.errors["userphone"] && (
                    <p className="text-sm font-medium text-destructive">{`${form.formState.errors.userphone.message}`}</p>
                )}
                <Button type="submit" className="w-full">Заказать звонок</Button>
            </form>
        </Form>
    )
}
