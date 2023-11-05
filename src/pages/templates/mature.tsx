import { DateRange, Education, HighlightsList, OtherProjects, SectionHeading } from "@/components/templates/mature-cmps";
import { FormFields } from "@/components/ui/basic-information-dialog";
import { useWatch } from "react-hook-form";

export function ResumeTemplateMature() {
    const { email, fullname, phoneNumber, title, summary, workExperience, education, otherProjects, skills, location } = useWatch<FormFields>()
    return (
        <section className="py-6 px-4 flex flex-col max-w-xl bg-white mx-auto my-4">
            <section className="flex justify-between mb-6">
                <div>
                    <h1 className="font-bold">{fullname}</h1>
                    <p className="text-xs">{title}</p>
                </div>

                <ul className="text-right">
                    <a href={`mailto:${email}`} className="text-xs block">{email}</a>
                    <a href={`tel:${phoneNumber}`} className="text-xs block">{phoneNumber}</a>
                    <p className="text-xs">{location}</p>
                </ul>
            </section>

            <section className="flex mb-4">
                <SectionHeading title="SUMMARY" />
                <p className="flex-1 text-xs">{summary}</p>
            </section>

            <section className="flex mb-4">
                <SectionHeading title="SKILLS & TOOLS" />
                <div className="flex flex-1 justify-end text-muted-foreground">
                    <p className="text-xs">{skills?.map(x => x.title).join(', ')}</p>
                </div>
            </section>

            <section>
                <SectionHeading title="WORK EXPERIENCE" />
                {workExperience?.map((experience, idx) => {
                    const { endDate, startDate, highlights, company, title } = experience
                    return (
                        <article className="flex mb-2" key={idx}>
                            <DateRange startDate={startDate} endDate={endDate} />
                            <div className="flex-1">
                                <h2 className="font-medium text-xs mb-2">{title} - {company}</h2>
                                <HighlightsList highlights={highlights ?? []} />
                            </div>
                        </article>
                    )
                })}
            </section>

            <Education education={education} />
            <OtherProjects otherProjects={otherProjects} />
        </section>
    )
}

export function TemplateMature() {
    return (
        <main className="bg-slate-200 min-h-full py-6">
            <div className="max-w-2xl bg-white m-auto p-4">
                <ResumeTemplateMature />
            </div>
        </main>
    )
}