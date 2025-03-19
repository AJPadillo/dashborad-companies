"use client";
import { useRouter } from "next/navigation";

import axios from "axios";

import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FooterCompanyProps } from "./FooterCompany.types";

export function FooterCompany(props: FooterCompanyProps) {
    const { companyId } = props
    return (
        <div>FooterCompany</div>
    )
}