import { FormFields } from "@/components/ui/basic-information-dialog"
import { Link } from 'lucide-react'
import { useWatch } from "react-hook-form"

export function TemplatePlain() {
    return (
        <main className="bg-slate-200 min-h-full py-6">
            <div className="max-w-2xl bg-white m-auto p-4">
                <ResumeTemplateOne />
            </div>
        </main>
    )
}

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = months[date.getMonth()] as string;
    return `${month}, ${date.getFullYear()}`;
}

export function ResumeTemplateOne() {
    const { email, title, fullname, phoneNumber, summary, workExperience, education, otherProjects, skills, location } = useWatch<FormFields>()
    return (
        <section className="py-6 px-4 flex flex-col max-w-xl bg-white mx-auto" style={{ fontFamily: 'ariel' }}>
            <section className="mb-4">
                <h1 className="text-center font-bold">{fullname}, {title}</h1>
                <ul className="text-xs text-center flex justify-center gap-1">
                    <p>{location}.</p>
                    <a href={`tel:${phoneNumber}`}>{phoneNumber},</a>
                    <a href={`mailto:${email}`}>{email},</a>
                </ul>
            </section>

            <hr className="border-black" />

            <section className="flex pb-2 pt-2">
                <h2 className="w-1/4 text-xs tracking-widest font-medium">PROFILE</h2>
                <p className="flex-1 text-xs">{summary}</p>
            </section>

            <hr className="border-black" />

            {/* TODO: might be a better way to check this condition */}
            {!(workExperience?.length === 0) && (
                <>
                    <section className="pb-2">
                        <h2 className="text-xs tracking-widest font-medium my-2">EMPLOYMENT HISTORY</h2>

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

                                        {/* TODO: don't use idx as key */}
                                        <ul className="text-xs list-disc flex flex-col">
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
                    <hr className="border-black" />
                </>
            )}


            {!(education?.length === 0) && (
                <>
                    <h2 className="text-xs tracking-widest font-medium my-2">EDUCATION</h2>
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

                                        <ul className="text-xs list-disc flex flex-col">
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
                    <hr className="border-black" />
                </>
            )}


            {!(otherProjects?.length === 0) && (
                <>
                    <h2 className="text-xs tracking-widest font-medium my-2">OTHER PROJECTS</h2>
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

                                            <ul className="text-xs list-disc flex flex-col mb-2">
                                                {highlights?.map((highlight, idx) => {
                                                    if (!highlight.text) return;
                                                    return (
                                                        <li key={idx} className="ml-4">{highlight.text}</li>
                                                    )
                                                })}
                                            </ul>

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
                    <hr className="border-black" />
                </>
            )}


            {!(skills?.length === 0) && (
                <section className="pb-2">
                    <h2 className="text-xs my-2 w-1/4">SKILLS & TOOLS</h2>
                    <div className="flex justify-end">
                        <p className="text-xs w-4/5">{skills?.map(x => x.title).join(', ')}</p>
                    </div>
                </section>
            )}
        </section>
    );
}