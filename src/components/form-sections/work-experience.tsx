import { SectionItemContainer } from "@/pages/builder"
import { Briefcase } from "lucide-react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SectionContainer from "./section-container"

export function WorkExperience() {
    const { register, control } = useFormContext<FormFields>()
    const { fields, append, remove } = useFieldArray({
        name: 'workExperience',
        control
    })

    return (
        <SectionContainer
            title="Work Experience"
            description="Enter your contact information"
            icon={<Briefcase size={30} className="text-primary" />}
        >
            <section>
                {fields.map((field, idx) => {
                    return (
                        <SectionItemContainer key={field.id} className="mb-4">
                            <article className="grid grid-cols-2 gap-6 mb-4">
                                <Input
                                    label="Company Name"
                                    {...register(`workExperience.${idx}.company`)}
                                />
                                <Input
                                    label="Job Title"
                                    {...register(`workExperience.${idx}.title`)}
                                />
                                <Input
                                    placeholder="City, Country"
                                    label="Location"
                                    {...register(`workExperience.${idx}.location`)}
                                />
                                <Input
                                    label="Start Date" type="date"
                                    {...register(`workExperience.${idx}.startDate`)}
                                />
                                <Input
                                    label="End Date" type="date"
                                    {...register(`workExperience.${idx}.endDate`)}
                                />
                                <Textarea
                                    placeholder="Quickly mention challenges faced and impact in this role."
                                    label="Professional Summary"
                                    wrapperClassName="col-span-2"
                                    {...register(`workExperience.${idx}.summary`)}
                                />
                            </article>

                            <Button onClick={() => remove(idx)} variant='default'>Remove</Button>
                        </SectionItemContainer>
                    )
                })}

                <AddSectionBtn title="Add Experience" onClick={() => append({})} />
            </section>
        </SectionContainer>
    )
}