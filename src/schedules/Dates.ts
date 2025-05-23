import { eachDayOfInterval, isMonday } from "date-fns";

export function firstMonday(year: number, month: number) : Date {
    const intervalDays = eachDayOfInterval({
        start: new Date(year, month -1, 1),
        end: new Date(year, month -1, 8)
    })

    const firstMonday = intervalDays.findIndex(day => isMonday(day))
    return intervalDays[firstMonday]
}