import { useWatch } from "react-hook-form"

const fields = [
    'fullname',
    'title',
    'email',
    'location',
    'phoneNumber',
    'website',
    'summary'
]

export function ResumePreview() {
    const value = useWatch({ name: fields })
    const skills = useWatch({ name: 'skills' })
    const workExperience = useWatch({ name: 'workExperience' })

    return (
        <main className="flex-1 p-4">
            <div className="bg-white max-w-sm p-4 m-auto">
                <h1 className="text-red-400">Basic Values</h1>
                {value.map(val => <p key={val}>{val}</p>)}

                <h1 className="text-red-400">Work Experience</h1>
                {skills.map(skill => <p key={skill.skill}>{skill.skill}</p>)}

                <h1 className="text-red-400">Skills</h1>
                {workExperience.map(experience => <p key={experience.company}>{experience.company}</p>)}
            </div>

        </main>
    )
}