import { FormFields } from "@/components/ui/basic-information-dialog"
import { Link } from 'lucide-react'
import { useWatch } from "react-hook-form"

const sampleData: FormFields = {
    title: 'Software Engineer',
    fullname: 'John Doe',
    workExperience: [
        {
            company: 'Google',
            endDate: '2021-01-01',
            startDate: '2020-01-01',
            title: 'Software Engineer',
            summary: 'I worked on the Google Search Engine',
            location: 'SA, California'
        },
        {
            company: 'Twitter',
            endDate: '2021-01-01',
            startDate: '2020-01-01',
            title: 'Product Engineer',
            summary: 'I worked on the Twitter Search Experience',
            location: 'SA, California'
        },
    ],
    education: [
        {
            degree: 'Bachelors of Science',
            endDate: '2021-01-01',
            fieldOfStudy: 'Computer Science',
            school: 'University of Lagos',
            startDate: '2020-01-01',
            summary: 'I studied computer science at the University of Lagos',
            location: 'Lagos, Nigeria'
        },
        {
            degree: 'Masters of Science',
            endDate: '2021-01-01',
            fieldOfStudy: 'Computer Science',
            school: 'University of Lagos',
            startDate: '2020-01-01',
            summary: 'I studied computer science at the University of Lagos',
            location: 'Lagos, Nigeria'
        },
    ],
    email: 'victorofoegbu0009@gmail.com',
    location: 'Lagos, Nigeria',
    phoneNumber: '+234 703 000 0000',
    website: 'https://victorofoegbu.com',
    summary: 'I am a software engineer with 3 years of experience building web applications. I am passionate about building products that solve real-world problems.',
    skills: [
        { skill: 'React' },
        { skill: 'Typescript' },
        { skill: 'Javascript' },
        { skill: 'Svelte' },
        { skill: 'Node.js' },
        { skill: 'Python' },
        { skill: 'Torch' },
        { skill: 'Tensorflow' },
        { skill: 'Transformer.js' },
        { skill: 'Next.js' },
    ],
    otherProjects: [
        {
            title: 'Todo App',
            description: 'A simple todo app built with React and Redux',
            url: 'https://github.com/username/todo-app',
            technologies: [
                'React',
                'Redux',
                'TypeScript'
            ],
        },
        {
            title: 'E-commerce Website',
            description: 'An e-commerce website built with React and Node.js',
            url: 'https://github.com/username/e-commerce-website',
            technologies: [
                'React',
                'Node.js',
                'MongoDB',
            ],
        },
        {
            title: 'Weather App',
            description: 'A weather app built with React and OpenWeatherMap API',
            url: 'https://github.com/username/weather-app',
            technologies: [
                'React',
                'TypeScript',
                'OpenWeatherMap API',
            ],
        },
    ]
}

export function TemplateOne() {
    return (
        <main className="bg-slate-200 min-h-full py-6">
            <div className="max-w-2xl bg-white m-auto p-4">
                <ResumeTemplateOne data={sampleData} />
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

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = months[date.getMonth()] as string;
    return `${month}, ${date.getFullYear()}`;
}

export function ResumeTemplateOne({ data }: { data: FormFields }) {
    // const { fullname, location, summary, phoneNumber, email, workExperience, education, skills, otherProjects } = data;
    const { email, fullname, phoneNumber, summary, workExperience, education, otherProjects, skills, location } = useWatch<FormFields>()
    return (
        <section className="p-3 flex flex-col max-w-xl bg-white mx-auto my-4">
            <section className="mb-4">
                <h1 className="text-center font-bold">{fullname}</h1>
                <p className="text-xs text-center">{location}, {phoneNumber}, {email}</p>
            </section>

            <hr className="border-black" />

            <section className="flex pb-4 pt-2">
                <h2 className="w-1/5 text-xs">PROFILE</h2>
                <p className="flex-1 text-xs">{summary}</p>
            </section>

            <hr className="border-black" />

            <section className="pb-4 pt-2">
                <h2 className="text-xs mb-2">EMPLOYMENT HISTORY</h2>

                {workExperience?.map((work, idx) => {
                    const { startDate, endDate, company, title, location } = work
                    return (
                        <article key={idx} className="flex mb-4">
                            {(startDate && endDate) && (
                                <div className="w-1/5 text-[10px] mt-0.5">
                                    {formatDate(endDate)} - {formatDate(startDate)}
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h3 className="text-sm mb-2 font-medium">{title} - {company}</h3>
                                    <p className="text-xs">{location}</p>
                                </div>
                                <DummyList />
                            </div>
                        </article>
                    )
                })}
            </section>

            <hr className="border-black" />

            <section className="pb-4 pt-2">
                <h2 className="text-xs mb-2">EDUCATION</h2>

                {education?.map((edu, idx) => {
                    const { startDate, endDate, school, degree, location, summary } = edu
                    return (
                        <article key={idx} className="flex mb-4">
                            {(startDate && endDate) && (
                                <div className="w-1/5 text-[10px] mt-0.5">
                                    {formatDate(endDate)} - {formatDate(startDate)}
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h3 className="text-sm font-medium">{degree} - {school} </h3>
                                    <p className="text-xs">{location}</p>
                                </div>
                                <p className="text-xs mb-2">{summary}</p>
                                <DummyList />
                            </div>
                        </article>
                    )
                })}
            </section>

            <hr className="border-black" />

            <section className="flex">
                <h2 className="text-xs mb-2 w-1/5">OTHER PROJECTS</h2>

                <section className="flex-1">
                    {otherProjects?.map((project, idx) => {
                        const { technologies, title, description, url, impact } = project
                        return (
                            <article key={idx} className="flex mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <h3 className="text-sm font-medium mr-2">{title} </h3>
                                        <a href={url}>
                                            <Link size={12} />
                                        </a>
                                    </div>
                                    <p className="text-xs mb-2">{description}</p>
                                    <p className="text-xs mb-2">{impact}</p>
                                    {technologies?.map((tech, idx) => (
                                        <span key={idx} className="text-xs mr-2">{tech}</span>
                                    ))}
                                </div>
                            </article>
                        )
                    })}
                </section>
            </section>

            <hr className="border-black" />

            <section className="pb-4 pt-2 flex">
                <h2 className="text-xs mb-2 w-1/5">SKILLS & TOOLS</h2>

                <ul className="flex flex-wrap gap-2 flex-1">
                    {skills?.map((skill, idx) => (
                        <li key={idx} className="text-xs p-1 bg-gray-200 rounded">{skill.skill}</li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default TemplateOne

function DummyList() {
    return (
        <ul className="text-xs list-disc flex flex-col gap-1">
            <li className="ml-4">Implemented a new feature that improved user engagement by 20%. Collaborated with cross-functional teams to deliver a project ahead of schedule</li>
            <li className="ml-4">Refactored legacy code to improve performance by 50%</li>
            <li className="ml-4">Participated in code reviews and provided constructive feedback to team members. Collaborated with cross-functional teams to deliver a project ahead of schedule</li>
            <li className="ml-4">Developed and maintained automated testing suites to ensure code quality, Collaborated with cross-functional teams to deliver a project ahead of schedule</li>
        </ul>
    )
}