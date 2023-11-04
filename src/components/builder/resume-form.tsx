import { ContactInformationSection } from "@/components/form-sections/contact"
import { Education } from "@/components/form-sections/education"
import { OtherProjects } from "@/components/form-sections/projects"
import { SkillsAndTools } from "@/components/form-sections/skills"
import { WorkExperience } from "@/components/form-sections/work-experience"
import { useFormContext } from "react-hook-form"
import { FormFields } from "../ui/basic-information-dialog"

export function ResumeForm() {
    const { handleSubmit } = useFormContext<FormFields>()

    const onSubmit = () => {
        // Nope
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