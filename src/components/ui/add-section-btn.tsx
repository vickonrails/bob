import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { HTMLAttributes } from 'react'

export const AddSectionBtn = ({ title, className, ...rest }: HTMLAttributes<HTMLButtonElement> & { title: string }) => {
    return (
        <button
            className={cn("flex text-sm items-center text-primary ml-10", className)}
            type="button"
            {...rest}
        >
            <Plus className="h-4" />
            <span>{title}</span>
        </button>
    )
}
