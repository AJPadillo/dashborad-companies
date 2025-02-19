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
        accessorKey: "status",
        header: "Status",
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