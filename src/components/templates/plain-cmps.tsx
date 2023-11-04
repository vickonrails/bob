import { cn, formatDate } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { FormFields } from "../ui/basic-information-dialog";
import { HighlightsList } from "./mature-cmps";
import { Link } from "lucide-react";

/**
 * SECTION HEADING
 */
export function SectionHeading({ title, className, ...rest }: HTMLAttributes<HTMLHeadingElement> & { title: string }) {
    if (!title) return null;
    return (
        <h2 className={cn('text-xs tracking-widest font-medium my-2', className)} {...rest}>{title}</h2>
    )
}

/**
 * DIVIDER
 */
export function Divider() {
    return (
        <hr className="border-black" />
    )
}


/**
 * OTHER PROJECTS
 */
export function OtherProjects({ otherProjects }: { otherProjects: FormFields['otherProjects'] }) {
    if (otherProjects?.length === 0) return null
    return (
        <>
            <SectionHeading title="OTHER PROJECTS" />
            <section className="flex justify-end">
                <section className="w-3/4">
                    {otherProjects?.map((project, idx) => {
                        const { technologies, title, description, url, highlights } = project
                        return (
                            <article key={idx} className="flex mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center mb-1">
                                        <h3 className="text-sm font-medium mr-2">{title} </h3>
                                        {url && (
                                            <a href={url} target="_blank" rel="noopener noreferrer">
                                                <Link size={12} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-xs mb-1">{description}</p>

                                    <HighlightsList highlights={highlights ?? []} />
                                    {!(technologies?.length === 0) && (
                                        <p className="text-xs">
                                            <span className="font-bold">Tech Stack</span>: {technologies?.join(', ')}
                                        </p>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </section>
            </section>
            <Divider />
        </>
    )
}

/**
 * EDUCATION
 */
export function Education({ education }: { education: FormFields['education'] }) {
    if (!(education?.length === 0)) return null
    return (
        <>
            <SectionHeading title="EDUCATION" />
            <section className="pb-2">

                {education?.map((edu, idx) => {
                    const { startDate, endDate, highlights, school, degree, location } = edu
                    return (
                        <article key={idx} className="flex mb-4">
                            {(startDate && endDate) && (
                                <div className="w-1/4 text-[10px] mt-0.5 pr-4">
                                    {formatDate(endDate)} - {formatDate(startDate)}
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h3 className="text-sm mb-2 font-medium">{degree} - {school} </h3>
                                    <p className="text-xs">{location}</p>
                                </div>

                                <HighlightsList highlights={highlights ?? []} />
                            </div>
                        </article>
                    )
                })}
            </section>
            <Divider />
        </>

    )
}

/**
 * WORK EXPERIENCE
 */
export function WorkExperience({ workExperience }: { workExperience: FormFields['workExperience'] }) {
    return (
        <>
            <section className="pb-2">
                <SectionHeading title="EMPLOYMENT HISTORY" />
                {workExperience?.map((work, idx) => {
                    const { startDate, endDate, company, title, location, highlights } = work
                    return (
                        <article key={idx} className="flex mb-4">
                            {(startDate && endDate) && (
                                <div className="w-1/4 text-[10px] mt-0.5 pr-2">
                                    {formatDate(endDate)} - {formatDate(startDate)}
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    {(company && title) && (
                                        <h3 className="text-sm mb-2 font-medium">{title} - {company}</h3>
                                    )}
                                    {location && (
                                        <p className="text-xs">{location}</p>
                                    )}
                                </div>

                                <HighlightsList highlights={highlights ?? []} />
                            </div>
                        </article>
                    )
                })}
            </section>
            <Divider />
        </>
    )
}