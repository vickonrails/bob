import { SectionItemContainer } from "@/pages/builder"
import { FolderOpenDot } from "lucide-react"
import { createRef, forwardRef, useImperativeHandle } from "react"
import { UseFieldArrayAppend, useFieldArray, useFormContext } from "react-hook-form"
import { AddSectionBtn } from "../ui/add-section-btn"
import { FormFields } from "../ui/basic-information-dialog"
import { Input } from "../ui/input"
import { HighlightForm, HighlightPropTypes } from "./highlight"
import SectionContainer from "./section-container"
import { SectionItemFooter } from "./section-item-footer"

export function OtherProjects() {
    const { register, control } = useFormContext<FormFields>()
    const { fields, remove, append } = useFieldArray({
        name: 'otherProjects',
        control
    })

    const highlightRef = createRef<RefTypeOtherProjects>()

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
                    </article>

                    <OtherProjectsHighlights
                        ref={highlightRef}
                        index={idx}
                    />

                    <SectionItemFooter
                        onRemoveBlock={() => remove(idx)}
                        onAddHighlight={() => highlightRef.current?.append({ text: '' })}
                    />
                </SectionItemContainer>
            ))}

            <AddSectionBtn title="Add Project" onClick={() => append({ highlights: [{ text: '' }] })} />
        </SectionContainer>
    )
}

const OtherProjectsHighlights = forwardRef<RefTypeOtherProjects, HighlightPropTypes>(({ index }, ref) => {
    const { control, register } = useFormContext<FormFields>()
    const { append, fields, remove } = useFieldArray({
        name: `otherProjects.${index}.highlights`,
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
                    const formProps = register(`otherProjects.${index}.highlights.${idx}.text`)
                    return (
                        <HighlightForm isFirst={isFirst} id={field.id} formProps={formProps} remove={() => remove(idx)} />
                    )
                })}
            </section>
        </section >
    )
});


export interface RefTypeOtherProjects {
    append: UseFieldArrayAppend<FormFields, `otherProjects.${number}.highlights`>
}