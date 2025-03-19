"use client";
import { useRouter } from "next/navigation";

import axios from "axios";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FooterCompanyProps } from "./FooterCompany.types";

export function FooterCompany(props: FooterCompanyProps) {
    const { companyId } = props
    const router = useRouter();

    const onDeleteCompany = async () => {
        console.log("delete company");
    }
    return (
        <div className="flex justify-end mt-5">
            <Button variant="destructive" onClick={onDeleteCompany}>
                <Trash className="h-4 w-4 mr-2" />Remove company
            </Button>
        </div>
    )
}