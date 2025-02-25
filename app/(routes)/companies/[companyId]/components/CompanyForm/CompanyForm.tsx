"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Toast } from "@/components/ui/toast"

import { UploadButton } from "@/utils/uploadthing"

import { CompanyFormProps } from "./CompanyForm.types"
import { formSchema } from "./CompanyForm.form"

export function CompanyForm(props: CompanyFormProps) {
    const { company } = props
    const router = useRouter()

    const [photoUploaded, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: company.name,
            description: company.description,
            country: company.country,
            website: company.website,
            phone: company.phone,
            cif: company.cif,
            profileImage: company.profileImage
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("on submit");

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                                <Input placeholder="Company name..." type="text" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="country" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="spain">Spain</SelectItem>
                                    <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                                    <SelectItem value="portugal">Portugal</SelectItem>
                                    <SelectItem value="germany">Germany</SelectItem>
                                    <SelectItem value="france">France</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="website" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                                <Input placeholder="www.example.com" type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    
                </div>
            </form>
        </Form>
    )
}