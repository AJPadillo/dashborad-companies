import Image from "next/image";
import { CompanyInformationProps } from "./CompanyInformation.types";
import { User } from "lucide-react";

export function CompanyInformation(props: CompanyInformationProps) {
    const { company } = props

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4">
            <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
                <div>
                    <Image src={company.profileImage} alt="Company Image" width={50} height={50} className="rounded-lg mb-3" />
                    {/*TODO: Company FORM */}
                    <p>Company form</p>
                </div>
            </div>
            <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4 h-min" >
                <div className="flex justify-between items-center gap-x-2">
                    <div className="flex items-center gap-x-2">
                        <User className="w-5 h-5" />
                        Contacts
                    </div>
                    <div>

                        <p>New contact</p>
                    </div>
                </div>
                {/*}TODO: List contacts*/}
                <p>List contacts</p>
            </div>
        </div>
    )
}