"use client";

import { Percent } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

import { CustomIcon } from "@/components/CustomIcon";

const data = [
    {
        name: "Website",
        value: 456,
        fill: "#8884D8"
    },
    {
        name: "Instagram",
        value: 854,
        fill: "#00C49F"
    },
    {
        name: "Other",
        value: 240,
        fill: "#FFBB28"
    }
]

export function TotalSuscribers() {
    return (
        <div className="mb-4 lg:mb-0 shadow-sm bg-background rounded-lg p-5 w-full md:w-96 hover:shadow-lg transition">
            <div className="flex gap-x-2 items-center mb-4">
                <CustomIcon icon={Percent} />
                <p className="text-xl">Total Suscribers</p>
            </div>
            <div className="w-full h-[200px] p-5">
                <ResponsiveContainer aspect={1} maxHeight={200}>
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" labelLine={false} />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}