import { TooltipContentProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import dayjs from "dayjs";

function isValidDate(str: string) {
    return dayjs(str).isValid();
}

function ChartTooltip({ active, payload, label }: TooltipContentProps<ValueType, NameType>) {
    if (!active || !payload || payload.length === 0) return null;

    const data = payload[0].payload;

    return (
        <div className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-md">
            <p className="text-sm font-semibold text-gray-700">
                {typeof label === "string" && isValidDate(label)
                    ? dayjs(label).format("YYYY.MM.DD")
                    : label}
            </p>
            <p className="text-sm text-gray-500">
                Count: <span className="font-medium text-gray-900">{data.count}</span>
            </p>
        </div>
    );
}

export default ChartTooltip;
