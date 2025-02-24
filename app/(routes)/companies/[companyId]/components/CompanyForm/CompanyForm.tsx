"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import { CompanyFormProps } from "./CompanyForm.types"

export function CompanyForm(props: CompanyFormProps) {
    const { company } = props
    return (
        <div>CompanyForm</div>
    )
}