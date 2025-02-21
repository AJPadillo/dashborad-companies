import Image from "next/image";
import { CompanyInformationProps } from "./CompanyInformation.types";

export function CompanyInformation(props: CompanyInformationProps) {
    const { company } = props

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
                <div>
                    <Image src={company.profileImage} alt="Company Image" width={50} height={50} className="rounded-lg mb-3" />
                    {/*TODO: Company FORM */}
                    <p>Company form</p>
                </div>
            </div>
            CompanyInformation
        </div>
    )
}