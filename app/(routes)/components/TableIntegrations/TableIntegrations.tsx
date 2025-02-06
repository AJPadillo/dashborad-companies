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
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { formatPrice } from "@/lib/formatPrice"


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

export const columns: ColumnDef<TableIntegrationsProps>[] = [
    {
        id: "icon",
        header: "LOGO",
        cell: ({ row }) => (
            <div className="capitalize">
                <Image src={row.getValue("icon")} alt="Logo" width={20} height={20} />
            </div>
        ),
    },
    {
        accessorKey: "app",
        header: "APPLICATION",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("app")}</div>
        ),
    },
    {
        accessorKey: "type",
        header: () => <div className="text-right">RATE</div>,
        cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
    },
    {
        accessorKey: "rate",
        header: () => <div className="text-right">RATE</div>,
        cell: ({ row }) => (
            <div className="text-right font-medium flex gap-1 items-center">
                <Progress value={row.getValue("rate")} className="h-2" />
            </div>
        )
    },
    {
        id: "profit",
        header: ({ column }) => (
            <Button variant="ghost" className="float-end px-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                PROFIT
                <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("profit"))
            return (
                <div className="text-right font-medium">
                    {formatPrice(amount)}
                </div>
            )
        },
    },
]

export function TableIntegrations() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    return (
        <div>

        </div>
    )
}