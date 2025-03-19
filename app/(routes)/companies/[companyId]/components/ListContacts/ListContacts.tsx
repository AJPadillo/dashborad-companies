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

    if (contacts.length === 0) {
        return <p>Actualmente no dispones de ningun contacto</p>
    }

    return (
        <div>
            <div className="mt-4 mb-2 grid grid-cols-3 p-2 gap-x-3 items-center justify-between px-4 bg-slate-400/20 rounded-lg">
                <p>Name</p>
                <p>Role</p>
                <p className="text-right">Contact</p>
            </div>

        </div>
    )
}