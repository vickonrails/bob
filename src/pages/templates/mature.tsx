import { FormFields } from "@/components/ui/basic-information-dialog";
import { formatDate } from "@/lib/utils";
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
                <h2 className="w-1/3 underline text-xs font-medium">SUMMARY</h2>

                <p className="flex-1 text-xs">{summary}</p>
            </section>

            <section className="flex mb-4">
                <h2 className="w-1/3 underline text-xs font-medium">SKILLS & TOOLS</h2>

                <div className="flex flex-1 justify-end text-muted-foreground">
                    <p className="text-xs">{skills?.map(x => x.title).join(', ')}</p>
                </div>
            </section>

            <section>
                <h2 className="w-1/3 underline text-xs font-medium">WORK EXPERIENCE</h2>
                {workExperience?.map((experience, idx) => {
                    const { endDate, startDate, highlights, company } = experience
                    return (
                        <article className="flex mb-2" key={idx}>
                            {(endDate && startDate) && (
                                <p className="w-1/3 mt-2 text-[10px]">{formatDate(endDate)} - {formatDate(startDate)}</p>
                            )}

                            <div className="flex-1">
                                <h2 className="font-medium text-xs mb-2">{company}</h2>
                                <ul className="text-xs text-muted-foreground list-disc flex flex-col gap-1">
                                    {highlights?.map((highlight, idx) => {
                                        if (!highlight.text) return;
                                        return (
                                            <li key={idx} className="ml-4">{highlight.text}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </section>

            <section>
                <h2 className="w-1/3 underline text-xs font-medium">EDUCATION</h2>
                {education?.map((education, idx) => {
                    const { endDate, startDate, highlights, school, degree, fieldOfStudy, location, summary } = education
                    return (
                        <article className="flex mb-2" key={idx}>
                            {(endDate && startDate) && (
                                <p className="w-1/3 mt-2 text-[10px]">{formatDate(endDate)} - {formatDate(startDate)}</p>
                            )}

                            <div className="flex-1">
                                <header className="mb-2">
                                    <h2 className="font-medium text-xs">{school}, {location}</h2>
                                    <p className="text-xs mb-2">{degree}, {fieldOfStudy}</p>
                                    <p className="text-xs text-muted-foreground">{summary}</p>
                                </header>

                                <ul className="text-xs text-muted-foreground list-disc flex flex-col gap-1">
                                    {highlights?.map((highlight, idx) => {
                                        if (!highlight.text) return;
                                        return (
                                            <li key={idx} className="ml-4">{highlight.text}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </section>

            <section>
                <h2 className="w-1/3 underline text-xs font-medium mb-2">OTHER PROJECTS</h2>
                {otherProjects?.map((project, idx) => {
                    const { highlights, description, technologies, title, url } = project
                    return (
                        <article className="flex mb-2" key={idx}>
                            <section className="w-1/3 pr-4 text-muted-foreground">
                                {!(technologies?.length === 0) && (
                                    <p className="text-xs">
                                        <span className="font-bold text-black">Tech Stack</span>: {technologies?.join(', ')}
                                    </p>
                                )}
                            </section>

                            <div className="flex-1">
                                <header className="mb-2">
                                    <h2 className="font-medium text-xs">{title}</h2>
                                    <a href={url} className="text-xs mb-2">{url}</a>
                                    <p className="text-xs text-muted-foreground">{description}</p>
                                </header>

                                <ul className="text-xs text-muted-foreground list-disc flex flex-col gap-1">
                                    {highlights?.map((highlight, idx) => {
                                        if (!highlight.text) return;
                                        return (
                                            <li key={idx} className="ml-4">{highlight.text}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </section>
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