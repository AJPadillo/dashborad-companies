"use client"

import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"

import { Company } from "@prisma/client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import Link from "next/link"
import Image from "next/image"

export const columns: ColumnDef<Company>[] = [
    {
        accessorKey: "profileImage",
        header: "Profile Image",
        cell: ({ row }) => {
            const image = row.getValue("profileImage")
            return (
                <div className="px-3">
                    <Image src={typeof image === "string" ? image : "/images/company-icon.png"} width={40} height={40} alt="Image" className="h-auto w-auto" />
                </div>
            )
        }
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]