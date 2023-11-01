import { SectionItemContainer } from "@/pages/builder"
import { GraduationCap } from "lucide-react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SectionContainer from "./section-container"

export function Education() {
    const { control, register } = useFormContext<FormFields>()
    const { fields, append, remove } = useFieldArray<FormFields>({
        name: 'education',
        control
    })

    return (
        <SectionContainer
            title="Education"
            description="More information about degrees, etc"
            icon={<GraduationCap size={30} className="text-primary" />}
        >
            {fields.map((field, idx) => (
                <SectionItemContainer key={field.id} className="mb-4">
                    <article className="grid grid-cols-2 gap-6 mb-4">
                        <Input
                            label="Institution"
                            {...register(`education.${idx}.school`)}
                        />
                        <Input
                            placeholder="E.g Bachelor of Science"
                            label="Degree"
                            {...register(`education.${idx}.degree`)}
                        />
                        <Input
                            placeholder="E.g Computer Science..."
                            label="Field of Study"
                            {...register(`education.${idx}.fieldOfStudy`)}
                        />
                        <Input
                            label="Start Date" type="date"
                            {...register(`education.${idx}.startDate`)}
                        />
                        <Input
                            label="End Date"
                            type="date"
                            {...register(`education.${idx}.endDate`)}
                        />
                        <Textarea
                            label="Short Summary"
                            wrapperClassName="col-span-2"
                            {...register(`education.${idx}.summary`)}
                        />
                    </article>

                    <Button onClick={() => remove(idx)} variant='default'>Remove</Button>
                </SectionItemContainer>
            ))}

            <AddSectionBtn title="Add Education" onClick={() => append({})} />
        </SectionContainer>
    )
}