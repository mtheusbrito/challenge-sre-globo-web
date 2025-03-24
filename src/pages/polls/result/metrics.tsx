import { useEffect, useState } from "react";
import { formatToDateString, formatToDateTimeString } from "../../../lib/date-utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface VotePerDateTime {
    dateTime: string;
    total: number;
}

interface ResultMetricsProps {
    data: VotePerDateTime[];
}

const formSchema = z.object({
    date: z.string(),
});

export type FormData = z.infer<typeof formSchema>;

export default function ResultMetrics({ data }: ResultMetricsProps) {
    const dates = [...new Set(data.map((item) => formatToDateString(item.dateTime)))];
    const [filteredDates, setFilteredDates] = useState<VotePerDateTime[]>([])

    const {register,watch } = useForm<FormData>({ resolver: zodResolver(formSchema), defaultValues: { date: dates[0] }});
    const dateSelected = watch("date");
    useEffect(() => {
        if (dateSelected) {
            const datesFiltered = data.filter(d => {
                const dateConverted = formatToDateString(d.dateTime);
                if (dateConverted.includes(dateSelected)) {
                    return d;
                }
            })
            setFilteredDates(datesFiltered)
        }
    }, [dateSelected])
    return (
        <div className="w-full space-y-3">
            <p>Selecione uma data:</p>
            <form>
                <select id="date" {...register("date")}>
                    {dates.map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </form>
            <div className="flex gap-4 overflow-x-auto p-4 rounded-lg">
                {filteredDates.map((item, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 p-3 rounded-lg shadow-md min-w-[120px]">
                        <span className="text-sm text-gray-500">{formatToDateTimeString(item.dateTime)}</span>
                        <span className="text-lg font-semibold text-blue-600">{item.total} votos</span>
                    </div>
                ))}
            </div>
        </div>
    );
}