import { ContactInformationSection } from "@/components/form-sections/contact"
import { Education } from "@/components/form-sections/education"
import { OtherProjects } from "@/components/form-sections/projects"
import { SkillsAndTools } from "@/components/form-sections/skills"
import { WorkExperience } from "@/components/form-sections/work-experience"
import { FormFields } from "@/components/ui/basic-information-dialog"
import { cn } from "@/lib/utils"
import { useForm, useFormContext } from "react-hook-form"
import { ResumeTemplateOne } from "./templates/one"
import { Template, useResumeTemplate } from "./root"

export type Form = ReturnType<typeof useForm<FormFields>>

function RenderTemplate({ template }: { template?: Template }) {
    switch (template) {
        case 'plain':
            return <ResumeTemplateOne />

        case 'mature':
            return <p>Mature Template</p>
    }
}

function Builder() {
    const template = useResumeTemplate()
    return (
        <div className="flex gap-4 h-full bg-gray-200 overflow-y-hidden">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
                <button onClick={() => template?.switchTemplate('mature')}>Switch to mature</button>
                <button onClick={() => template?.switchTemplate('plain')}>Switch to plain</button>
                <RenderTemplate template={template?.name} />
            </div>
        </div>
    )
}

function Sidebar() {
    return (
        <aside className="w-1/2 py-8 max-h-screen overflow-y-auto bg-white">
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
            <SkillsAndTools />
            <WorkExperience />
            <OtherProjects />
            <Education />
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