import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { Mail, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { ListContactsProps } from "./ListContacts.types";

export function ListContacts(props: ListContactsProps) {
    const { company } = props
    return (
        <div>ListContacts</div>
    )
}