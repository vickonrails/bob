import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
    icon: ReactNode
}

export const SectionContainer = ({ children, icon, title, description, className, ...rest }: SectionContainerProps) => {
    return (
        <section className={cn("mb-10", className)} {...rest}>
            <header className="flex items-start gap-2">
                <span className="inline-block w-10">{icon}</span>
                <div className="flex-1">
                    <h2 className="font-medium text-lg">{title}</h2>
                    <p className="mb-4 text-sm max-w-md text-muted-foreground">{description}</p>
                </div>
            </header>

            {children}
        </section>
    )
}

export default SectionContainer