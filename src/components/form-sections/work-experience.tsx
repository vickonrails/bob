import { SectionItemContainer } from "@/pages/builder"
import { Briefcase, Trash2 } from "lucide-react"
import { createRef, forwardRef, useImperativeHandle } from "react"
import { UseFieldArrayAppend, useFieldArray, useFormContext } from "react-hook-form"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SectionContainer from "./section-container"

interface RefType {
    appendHighlight: UseFieldArrayAppend<FormFields, `workExperience.${number}.highlights`>
}

export function WorkExperience() {
    const { register, control } = useFormContext<FormFields>()
    const { fields, append, remove } = useFieldArray({
        name: 'workExperience',
        control
    })

    const highlightRef = createRef<RefType>()

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
                            </article>

                            <Highlights index={idx} ref={highlightRef} />

                            <div className="flex gap-2">
                                <Button type="button" onClick={() => highlightRef.current?.appendHighlight({})}>Add Highlight</Button>
                                <Button variant='outline' onClick={() => remove(idx)}>
                                    <Trash2 size={18} className="mr-2" />
                                    <span>Remove Block</span>
                                </Button>
                            </div>
                        </SectionItemContainer>
                    )
                })}

                <AddSectionBtn title="Add Experience" onClick={() => append({ highlights: [{ text: '' }] })} />
            </section>
        </SectionContainer>
    )
}

interface PropsType {
    index: number
}

const Highlights = forwardRef<RefType, PropsType>(({ index }, ref) => {
    const { control, register } = useFormContext<FormFields>()
    const { append: appendHighlight, fields: highlightFields, remove } = useFieldArray({
        name: `workExperience.${index}.highlights`,
        control
    });

    useImperativeHandle(ref, () => {
        return {
            appendHighlight
        }
    }, [appendHighlight])

    return (
        <section>
            <section className="flex flex-col gap-2">
                {highlightFields.map((field, idx) => {
                    const isFirst = idx === 0
                    return (
                        <>
                            <Textarea
                                rows={2}
                                className="min-h-fit"
                                key={field.id}
                                label={isFirst ? 'Highlight (Impact)' : ''}
                                placeholder={isFirst ? 'Enter your impact during this period' : ''}
                                {...register(`workExperience.${index}.highlights.${idx}.text`)}
                            />
                            <div className="flex justify-end">
                                <Button variant='link' onClick={() => remove(idx)} className="p-0 h-auto text-sm" type="button">Remove</Button>
                            </div>
                        </>
                    )
                })}
            </section>
        </section>
    )
})
