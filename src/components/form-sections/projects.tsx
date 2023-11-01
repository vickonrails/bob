import { SectionItemContainer } from "@/pages/builder"
import { FolderOpenDot } from "lucide-react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SectionContainer from "./section-container"

export function OtherProjects() {
    const { register, control } = useFormContext<FormFields>()
    const { fields, remove, append } = useFieldArray({
        name: 'otherProjects',
        control
    })

    return (
        <SectionContainer
            title="Other Projects"
            description="Enter your contact information"
            icon={<FolderOpenDot size={30} className="text-primary" />}
        >
            {fields.map((field, idx) => (
                <SectionItemContainer className="mb-4" key={field.id}>
                    <article className="grid grid-cols-2 gap-6 mb-4">
                        <Input
                            label="Project Name"
                            {...register(`otherProjects.${idx}.title`)}
                        />
                        <Input
                            label="Project URL" {
                            ...register(`otherProjects.${idx}.url`)}
                        />
                        <Textarea
                            label="Project Description"
                            wrapperClassName="col-span-2"
                            {...register(`otherProjects.${idx}.description`)}
                        />
                        <Textarea
                            label="Impact"
                            wrapperClassName="col-span-2"
                            {...register(`otherProjects.${idx}.impact`)}
                        />
                    </article>
                    <Button onClick={() => remove(idx)}>Remove</Button>
                </SectionItemContainer>
            ))}

            <AddSectionBtn title="Add Project" onClick={() => append({})} />
        </SectionContainer>
    )
}