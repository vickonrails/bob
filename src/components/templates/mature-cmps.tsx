import { formatDate } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { FormFields } from "../ui/basic-information-dialog";

/**
 * SECTION HEADING
 */
export function SectionHeading({ title, ...rest }: HTMLAttributes<HTMLHeadingElement> & { title: string }) {
    if (!title) return null;

    return (
        <h2 className="w-1/3 underline text-xs font-medium mb-2" {...rest}>{title}</h2>
    )
}

/**
 * HIGHLIGHTS LIST
 */
export function HighlightsList({ highlights }: { highlights: { text?: string }[] }) {
    return (
        <ul className="text-xs text-muted-foreground list-disc flex flex-col gap-1">
            {highlights?.map((highlight, idx) => {
                if (!highlight.text) return;
                return (
                    <li key={idx} className="ml-4">{highlight.text}</li>
                )
            })}
        </ul>
    )
}

/**
 * DATE RANGE
 */
export function DateRange({ startDate, endDate }: { startDate?: string, endDate?: string }) {
    if (!(startDate && endDate)) return null;
    return (
        <p className="w-1/3 mt-2 text-[10px]">{formatDate(endDate)} - {formatDate(startDate)}</p>
    )
}

/**
 * EDUCATION
 */
export function Education({ education }: { education?: FormFields['education'] }) {
    if (education && education?.length > 0) return null;
    return (
        <section>
            <SectionHeading title="EDUCATION" />
            {education?.map((education, idx) => {
                const { endDate, startDate, highlights, school, degree, fieldOfStudy, location, summary } = education
                return (
                    <article className="flex mb-2" key={idx}>
                        <DateRange startDate={startDate} endDate={endDate} />
                        <div className="flex-1">
                            <header className="mb-2">
                                <h2 className="font-medium text-xs">{school}, {location}</h2>
                                <p className="text-xs mb-2">{degree}, {fieldOfStudy}</p>
                                <p className="text-xs text-muted-foreground">{summary}</p>
                            </header>

                            <ul className="text-xs text-muted-foreground list-disc flex flex-col gap-1">
                                <HighlightsList highlights={highlights ?? []} />
                            </ul>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}


/**
 * OTHER PROJECTS
 */
export function OtherProjects({ otherProjects }: { otherProjects: FormFields['otherProjects'] }) {
    return (
        <section>
            <SectionHeading title="OTHER PROJECTS" />
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

                            <HighlightsList highlights={highlights ?? []} />
                        </div>
                    </article>
                )
            })}
        </section>
    )
}