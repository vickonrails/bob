import { SectionItemContainer } from "@/pages/builder";
import { Wrench, X } from "lucide-react";
import { useMemo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { AddSectionBtn } from "../ui/add-section-btn";
import { FormFields } from "../ui/basic-information-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SectionContainer from "./section-container";

export function SkillsAndTools() {
    const { control, register } = useFormContext<FormFields>()
    const { fields, append, remove } = useFieldArray<FormFields>({
        name: 'skills',
        control
    })
    const hasSkills = useMemo(() => fields.length > 0, [fields])

    return (
        <SectionContainer
            title="Skills & Tools"
            description="Mention up 3 - 10 of your most valuable professional skills that matches the job description"
            icon={<Wrench size={35} className="text-primary" />}
        >
            {hasSkills && (
                <SectionItemContainer className="flex gap-3 flex-wrap p-6">
                    {fields.map((field, idx) => (
                        <div className="flex gap-2">
                            <Input key={field.id} {...register(`skills.${idx}.skill`)} />
                            <Button onClick={_ => remove(idx)} variant='ghost' className="px-2 h-auto flex place-items-center text-muted-foreground">
                                <X className="h-4 m-auto" />
                            </Button>
                        </div>
                    ))}
                </SectionItemContainer>
            )}

            <AddSectionBtn title="Add Skill" onClick={() => append({})} />
        </SectionContainer>
    );
}