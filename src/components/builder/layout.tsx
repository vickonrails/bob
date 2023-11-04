import { cn } from "@/lib/utils";
import { ResumeForm } from "./resume-form";
import { ResumeTemplatePlain } from "@/pages/templates/plain";
import { TemplateType } from "@/pages/root";
import { ResumeTemplateMature } from "@/pages/templates/mature";

export function Sidebar() {
    return (
        <aside className="w-1/2 py-8 max-h-screen overflow-y-auto bg-white print:hidden">
            <section className="max-w-xl m-auto">
                <h1 className="text-xl mb-12 font-medium text-center">Resume Builder</h1>
                <ResumeForm />
            </section>
        </aside>
    )
}

/**
 * 
 */
export function SectionItemContainer({ children, className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={cn('border mb-4 p-6 rounded-md', className)}
            {...rest}
        >
            {children}
        </section>
    )
}

/**
 * 
 */
export function TemplateRenderer({ template }: { template?: TemplateType }) {
    switch (template) {
        case 'plain':
            return <ResumeTemplatePlain />

        case 'mature':
            return <ResumeTemplateMature />
    }
}