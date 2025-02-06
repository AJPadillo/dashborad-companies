"use client"

import * as React from "react"
import { ArrowUpDown, ChevronUp, ChevronDown, MoreHorizontal } from "lucide-react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TableIntegrationsProps } from "./TableIntegrations.types"


const data: TableIntegrationsProps[] = [
    {
        app: "Stripe",
        icon: "/images/stripe.png",
        type: "Finance",
        rate: 60,
        profit: 450
    },
    {
        app: "Zapier",
        icon: "/images/zapier.png",
        type: "CRM",
        rate: 20,
        profit: 144.5
    },
    {
        app: "Shopify",
        icon: "/images/shopify.png",
        type: "Marketplace",
        rate: 70,
        profit: 766.33
    }
]

export function TableIntegrations() {
    return (
        <div>

        </div>
    )
}