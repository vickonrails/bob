import { GraduationCap } from "lucide-react"
import { createRef, forwardRef, useImperativeHandle } from "react"
import { UseFieldArrayAppend, useFieldArray, useFormContext } from "react-hook-form"
import { SectionItemContainer } from "../builder/layout"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Input } from "../ui/input"
import { HighlightForm, HighlightPropTypes } from "./highlight"
import SectionContainer from "./section-container"
import { SectionItemFooter } from "./section-item-footer"

export interface RefTypeEducation {
    append: UseFieldArrayAppend<FormFields, `education.${number}.highlights`>
}

export function Education() {
    const { control, register } = useFormContext<FormFields>()
    const { fields, append, remove } = useFieldArray<FormFields>({
        name: 'education',
        control
    })

    const highlightRef = createRef<RefTypeEducation>()

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
                    </article>

                    <EducationHighlights
                        ref={highlightRef}
                        index={idx}
                    />

                    <SectionItemFooter
                        onRemoveBlock={() => remove(idx)}
                        onAddHighlight={() => highlightRef.current?.append({ text: '' })}
                    />
                </SectionItemContainer>

            ))}

            <AddSectionBtn title="Add Education" onClick={() => append({ highlights: [{ text: '' }] })} />
        </SectionContainer>
    )
}


const EducationHighlights = forwardRef<RefTypeWorkExperience, HighlightPropTypes>(({ index }, ref) => {
    const { control, register } = useFormContext<FormFields>()
    const { append, fields, remove } = useFieldArray({
        name: `education.${index}.highlights`,
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
                    const formProps = register(`education.${index}.highlights.${idx}.text`)
                    return (
                        <HighlightForm isFirst={isFirst} id={field.id} formProps={formProps} remove={() => remove(idx)} />
                    )
                })}
            </section>
        </section >
    )
});

export interface RefTypeWorkExperience {
    append: UseFieldArrayAppend<FormFields, `education.${number}.highlights`>
}