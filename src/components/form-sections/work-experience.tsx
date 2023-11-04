import { Briefcase } from "lucide-react"
import { createRef, forwardRef, useImperativeHandle } from "react"
import { UseFieldArrayAppend, useFieldArray, useFormContext } from "react-hook-form"
import { SectionItemContainer } from "../builder/layout"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Input } from "../ui/input"
import { HighlightForm, HighlightPropTypes } from "./highlight"
import SectionContainer from "./section-container"
import { SectionItemFooter } from "./section-item-footer"

export function WorkExperience() {
    const { register, control } = useFormContext<FormFields>()
    const { fields, append, remove } = useFieldArray({
        name: 'workExperience',
        control
    })

    const highlightRef = createRef<RefTypeWorkExperience>()

    return (
        <SectionContainer
            title="Work Experience"
            description="Enter your contact information"
            icon={<Briefcase size={30} className="text-primary" />}
        >
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
                        </article>

                        <WorkExperienceHighlights
                            index={idx}
                            ref={highlightRef}
                        />

                        <SectionItemFooter
                            onRemoveBlock={() => remove(idx)}
                            onAddHighlight={() => highlightRef.current?.append({ text: '' })}
                        />
                    </SectionItemContainer>
                )
            })}

            <AddSectionBtn title="Add Experience" onClick={() => append({ highlights: [{ text: '' }] })} />
        </SectionContainer>
    )
}


const WorkExperienceHighlights = forwardRef<RefTypeWorkExperience, HighlightPropTypes>(({ index }, ref) => {
    const { control, register } = useFormContext<FormFields>()
    const { append, fields, remove } = useFieldArray({
        name: `workExperience.${index}.highlights`,
        control
    });

    useImperativeHandle(ref, () => {
        return {
            append
        }
    }, [append])

    return (
        <section>
            <section className="flex flex-col gap-2">
                {fields.map((field, idx) => {
                    const isFirst = idx === 0
                    const formProps = register(`workExperience.${index}.highlights.${idx}.text`)
                    return (
                        <HighlightForm isFirst={isFirst} id={field.id} formProps={formProps} remove={() => remove(idx)} />
                    )
                })}
            </section>
        </section >
    )
});

export interface RefTypeWorkExperience {
    append: UseFieldArrayAppend<FormFields, `workExperience.${number}.highlights`>
}