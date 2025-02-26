"use client"

import { useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import axios from "axios"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Toast } from "@/components/ui/toast"

import { FormContactProps } from "./FormContact.types"
import { formSchema } from "./FormContact.form"

export function FormContact(props: FormContactProps) {
    const { setOpen } = props

    const params = useParams<{ companyId: string }>
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            role: "",
            email: "",
            phone: "",
        }
    })
    return (
        <div>FormContact</div>
    )
}