import { FormFields } from "@/components/ui/basic-information-dialog"
import { Sidebar, TemplateRenderer } from "@/components/builder/layout"
import { MoreOptions } from "@/components/builder/more-options-menu"
import { TemplateSelect } from "@/components/builder/template-select"
import { useResumeTemplate } from "@/hooks/useResumeTemplate"
import { MoreVertical } from "lucide-react"
import { useCallback } from "react"
import { useForm, useFormContext } from "react-hook-form"

export type Form = ReturnType<typeof useForm<FormFields>>

function Builder() {
    const template = useResumeTemplate()
    const { reset } = useFormContext<FormFields>()

    const handleDownloadPDF = useCallback(() => {
        const curTemplate = template?.name === 'plain' ? 'plain' : 'mature'
        const printWindow = window.open(`http://localhost:5173/templates/${curTemplate}`, 'printWindow', 'width=800,height=600');
        printWindow?.addEventListener('load', () => {
            printWindow.addEventListener('afterprint', () => {
                setTimeout(() => printWindow.close(), 1000);
            })
            printWindow.print();
        })
    }, [template?.name])

    return (
        <div className="flex gap-4 h-full bg-gray-200 overflow-y-hidden">
            <Sidebar />
            <div className="flex-1 overflow-y-auto ">
                <section className="flex py-3 max-w-xl mx-auto gap-2 justify-end items-center">
                    <p className="text-sm text-muted-foreground">Switch Templates</p>
                    <TemplateSelect />
                    <MoreOptions
                        trigger={<MoreVertical size={15} className="text-muted-foreground" />}
                        onDownloadPDF={handleDownloadPDF}
                        onResetForm={() => reset()}
                    />
                </section>
                <TemplateRenderer template={template?.name} />
            </div>
        </div>
    )
}

export default Builder