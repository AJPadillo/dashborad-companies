import { CardSummaryProps } from "./CardSummary.types";

export function CardSummary(props: CardSummaryProps) {
    const { average, icon, title, total, tooltipText } = props;
    return (
        <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className="flex justify-between">
                {title}
            </div>
        </div>
    )
}