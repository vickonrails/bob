import { ContactInformationSection } from "@/components/form-sections/contact"
import { Education } from "@/components/form-sections/education"
import { OtherProjects } from "@/components/form-sections/projects"
import { SkillsAndTools } from "@/components/form-sections/skills"
import { WorkExperience } from "@/components/form-sections/work-experience"
import { ResumePreview } from "@/components/resume-preview"
import { FormFields } from "@/components/ui/basic-information-dialog"
import { cn } from "@/lib/utils"
import { FormProvider, useForm, useFormContext } from "react-hook-form"

const defaultValues: FormFields = {
    fullname: '',
    title: '',
    email: '',
    location: '',
    phoneNumber: '',
    website: '',
    summary: '',
    skills: [],
    workExperience: [],
    education: []
}

export type Form = ReturnType<typeof useForm<FormFields>>

function Builder() {
    // This is where I pass the context?
    const form = useForm<FormFields>({ defaultValues })

    return (
        <FormProvider {...form}>
            <div className="flex gap-4 h-full bg-gray-200">
                <Sidebar />
                <ResumePreview />
            </div>
        </FormProvider>
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