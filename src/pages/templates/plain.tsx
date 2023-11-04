import { Divider, Education, OtherProjects, SectionHeading, WorkExperience } from "@/components/templates/plain-cmps"
import { FormFields } from "@/components/ui/basic-information-dialog"
import { useWatch } from "react-hook-form"

export function TemplatePlain() {
    return (
        <main className="bg-slate-200 min-h-full py-6">
            <div className="max-w-2xl bg-white m-auto p-4">
                <ResumeTemplatePlain />
            </div>
        </main>
    )
}

export function ResumeTemplatePlain() {
    const { email, title, fullname, phoneNumber, summary, workExperience, education, otherProjects, skills, location } = useWatch<FormFields>()
    return (
        <section
            className="py-6 px-4 flex flex-col max-w-xl bg-white mx-auto my-4"
            style={{ fontFamily: 'ariel' }}
        >
            <section className="mb-4">
                <h1 className="text-center font-bold">{fullname}, {title}</h1>
                <ul className="text-xs text-center flex justify-center gap-1">
                    <p>{location}.</p>
                    <a href={`tel:${phoneNumber}`}>{phoneNumber},</a>
                    <a href={`mailto:${email}`}>{email},</a>
                </ul>
            </section>

            <Divider />

            <section className="flex pb-2 pt-2">
                <SectionHeading className="w-1/4" title="PROFILE" />
                <p className="flex-1 text-xs">{summary}</p>
            </section>

            <Divider />

            <WorkExperience workExperience={workExperience} />
            <Education education={education} />
            <OtherProjects otherProjects={otherProjects} />

            {!(skills?.length === 0) && (
                <section className="pb-2">
                    <SectionHeading title="SKILLS & TOOLS" />
                    <div className="flex justify-end">
                        <p className="text-xs w-4/5">{skills?.map(x => x.title).join(', ')}</p>
                    </div>
                </section>
            )}
        </section>
    );
}

