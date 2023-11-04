import { ContactInformationSection } from "@/components/form-sections/contact"
import { Education } from "@/components/form-sections/education"
import { OtherProjects } from "@/components/form-sections/projects"
import { SkillsAndTools } from "@/components/form-sections/skills"
import { WorkExperience } from "@/components/form-sections/work-experience"
import { FormFields } from "@/components/ui/basic-information-dialog"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { MenubarProps } from "@radix-ui/react-menubar"
import { MoreVertical } from "lucide-react"
import { useForm, useFormContext } from "react-hook-form"
import { TemplateType } from "./root"
import { ResumeTemplateMature } from "./templates/mature"
import { ResumeTemplatePlain } from "./templates/plain"
import { useResumeTemplate } from "@/hooks/useResumeTemplate"

export type Form = ReturnType<typeof useForm<FormFields>>

function TemplateRenderer({ template }: { template?: TemplateType }) {
    switch (template) {
        case 'plain':
            return <ResumeTemplatePlain />

        case 'mature':
            return <ResumeTemplateMature />
    }
}

interface MoreOptionsMenuProps extends MenubarProps {
    trigger: React.ReactNode
    onDownloadPDF: () => void
    onResetForm: () => void
}

function MoreOptions({ trigger, onDownloadPDF, onResetForm }: MoreOptionsMenuProps) {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="h-full px-1">{trigger}</MenubarTrigger>
                <MenubarContent side='bottom' align="end">
                    <MenubarItem onClick={onDownloadPDF}>Download PDF</MenubarItem>
                    <MenubarItem onClick={onResetForm} className="text-destructive focus:text-red-400">Reset Form</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

function Builder() {
    const template = useResumeTemplate()
    const { reset } = useFormContext<FormFields>()

    const handleDownloadPDF = () => {
        const destination = template?.name === 'plain' ? 'plain' : 'mature'
        const printWindow = window.open(`http://localhost:5173/templates/${destination}`, 'printWindow', 'width=800,height=600');
        printWindow?.addEventListener('load', () => {
            printWindow.addEventListener('afterprint', () => {
                setTimeout(() => printWindow.close(), 2000);
            })
            printWindow.print();
        })
    }

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

function TemplateSelect() {
    const template = useResumeTemplate()
    return (
        <Select defaultValue={template?.name} onValueChange={(val: TemplateType) => template?.switchTemplate(val)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="plain">Plain</SelectItem>
                <SelectItem value="mature">Mature</SelectItem>
            </SelectContent>
        </Select>
    )
}

function Sidebar() {
    return (
        <aside className="w-1/2 py-8 max-h-screen overflow-y-auto bg-white print:hidden">
            <section className="max-w-xl m-auto">
                <h1 className="text-xl mb-12 font-medium text-center">Resume Builder</h1>
                <ResumeForm />
            </section>
        </aside>
    )
}

function ResumeForm() {
    const { handleSubmit } = useFormContext<FormFields>()
    const onSubmit = (data: FormFields) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
            <ContactInformationSection />
            <WorkExperience />
            <Education />
            <OtherProjects />
            <SkillsAndTools />
        </form>
    )
}

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

export default Builder