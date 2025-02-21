import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function CompanyIdPage({ params }: { params: { companyId: string } }) {
    const { userId } = auth()
    if (!userId) {
        return redirect("/")
    }

    const company = await db.company.findUnique(
        {
            where: {
                id: params.companyId,
                userId
            }
        }
    )

    if (!company) {
        return redirect("/")
    }

    console.log(company);


    return (
        <div>
            <p>Header</p>
            <p>Company Information</p>
            <p>Footer Company</p>
        </div>
    )
}