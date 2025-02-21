import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default function CompanyIdPage({ params }: { params: { companyId: string } }) {
    return (
        <div>Page</div>
    )
}