import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { Mail, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { ListContactsProps } from "./ListContacts.types";
import { auth } from "@clerk/nextjs";

export async function ListContacts(props: ListContactsProps) {
    const { company } = props
    const { userId } = auth()

    if (!userId) {
        return redirect("/");
    }

    const contacts = await db.contact.findMany({
        where: {
            company: {
                id: company.id
            }
        }
    })

    return (
        <div>ListContacts</div>
    )
}