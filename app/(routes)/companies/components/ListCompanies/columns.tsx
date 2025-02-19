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
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Company name <ArrowUpDown className="w-4 h-4 ml-2" /></Button>
            )
        },
    },
    {
        accessorKey: "cif",
        header: "CIF",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "country",
        header: "Country",
    },
    {
        accessorKey: "website",
        header: "Website",
    },
    
]