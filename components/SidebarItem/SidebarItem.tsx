import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";

export function SidebarItem(props: SidebarItemProps) {
    const { item } = props;
    const { href, icon: Icon, label } = item;

    return (
        <Link href={href} className={cn('flex gap-x-2 nt-2 light:text-slate-700 dark:text-white text-sn items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer')}>
            <Icon className="h-5 w-5" strokeWidth={1} />
            {label}
        </Link>
    )
}