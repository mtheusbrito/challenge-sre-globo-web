import { parseISO, format, isBefore } from 'date-fns';

export function formatToDateTimeString(isoDate: string): string {
  const date = formatToDate(isoDate)
  return format(date, 'dd/MM/yyyy HH:mm');
}

export function formatToDateString(isoDate: string): string {
  const date = formatToDate(isoDate)
  return format(date, 'dd/MM/yyyy')
}

export function formatToDate(isoDate: string): Date{
  return parseISO(isoDate); 
}

export function currentDateIsBeforeAt(date: Date): boolean{
  return isBefore(new Date(), date)
}

export function currentDate() : Date {
  return new Date();
}