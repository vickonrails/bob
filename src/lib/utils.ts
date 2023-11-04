import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const month = months[date.getMonth()] as string;
  return `${month}, ${date.getFullYear()}`;
}