import { FormFields } from "@/components/ui/basic-information-dialog";
import { Outlet } from "@tanstack/react-router";
import { createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

// const defaultValuesComplete: FormFields = {
//     fullname: 'Ofoegbu Victor',
//     title: 'Software Engineer',
//     email: 'victorofoegbu0009@gmail.com',
//     location: 'Montreal, Canada',
//     phoneNumber: '09066306791',
//     website: 'victorofoegbu.com',
//     summary: 'Seasoned Software Engineer, specialized in full-stack development, cloud computing, and agile projects. Expert in Java, C#, Python. Drives innovation and efficient, user-centric software solutions.',
//     skills: [
//         { title: 'React' },
//         { title: 'Performance' },
//         { title: 'Design systems' },
//         { title: 'Next.js' },
//         { title: 'Tailwind' },
//         { title: 'Typescript' },
//         { title: 'Storybook' },
//         { title: 'Vite' },
//     ],
//     workExperience: [
//         {
//             company: 'Google',
//             startDate: '2021-09-01',
//             endDate: '2021-09-01',
//             highlights: [

//                 { text: 'Processed staff payroll and other main aspects of financial transactions.' },
//                 { text: 'Managed accounting teams and ensured that all accounting records were complete and accurate.' },
//                 { text: 'Explained financial matters to people outside of the finance department in a comprehensive way.' },
//                 { text: 'Remained professional and discreet when handling sensitive or private tinancial matter session of their careers.' },
//             ],
//             location: 'Montreal, Canada',
//             summary: '',
//             title: 'Software Engineer'
//         },
//         {
//             company: 'Google',
//             startDate: '2021-09-01',
//             endDate: '2021-09-01',
//             highlights: [
//                 { text: 'Built quality interfaces for a few enterprise-grade products.' },
//                 { text: 'Provided technical consultancy and support.' },
//                 { text: 'Built quality interfaces for a few enterprise-grade products.' },
//                 { text: 'Provided technical consultancy and support.' },
//                 { text: 'Oversaw the management of all company accounts.' },
//             ],
//             location: 'Montreal, Canada',
//             summary: '',
//             title: 'Software Engineer'
//         },
//     ],
//     education: [
//         {
//             degree: 'BSc',
//             endDate: '2021-09-01',
//             fieldOfStudy: 'Computer Science',
//             highlights: [
//                 { text: 'Assisted in running lots of tests and experiments.' },
//                 { text: 'Attended Google Developer Group meetups.' },
//                 { text: 'Provided technical consultancy and support.' },
//                 { text: 'Organized a web development Boot camp.' },
//                 { text: 'Took an Introductory to Computer Science course.' },
//                 { text: 'Basic Calculus and Trigonometry Mathematics.' },
//             ],
//             location: 'London',
//             school: 'University of London',
//             startDate: '2018-09-01',
//             summary: 'I studied Computer Science at the University of London'
//         },
//     ],
//     otherProjects: [{
//         title: 'Avocado UI',
//         url: 'https://avocado-ui.com',
//         description: 'A React UI library & design system',
//         highlights: [
//             { text: 'Made a design system out of nothing fgs' },
//             { text: 'What else do you want to know about my current skills' }
//         ],
//         technologies: ['React', 'TypeScript', 'TailwindCSS']
//     },
//     {
//         title: 'WhereAPI',
//         url: 'https://avocado-ui.com',
//         description: 'An app to help me develop some chrome extensions',
//         highlights: [
//             { text: 'Made a design system out of nothing fgs' },
//             { text: 'What else do you want to know about my current skills' }
//         ],
//         technologies: ['chrome extension', 'Twitter', 'LinkedIn']
//     }]
// }

const defaultValues: FormFields = {
    fullname: '',
    title: '',
    email: '',
    location: '',
    phoneNumber: '',
    website: '',
    summary: '',
    skills: [],
    workExperience: [],
    education: [],
    otherProjects: []
}

export type TemplateType = 'plain' | 'mature'

interface TemplateContextProps {
    name: TemplateType
    switchTemplate: (name: TemplateType) => void
}

export const TemplateContext = createContext<TemplateContextProps | null>(null);

function Root() {
    const form = useForm<FormFields>({ defaultValues });
    const [template, setTemplate] = useState<TemplateType>('plain')

    useFormPersist("resume-key", {
        watch: form.watch,
        setValue: form.setValue,
        storage: window.localStorage,
    });

    const switchTemplate = (name: TemplateType) => {
        setTemplate(name)
    }

    return (
        <TemplateContext.Provider value={{ name: template, switchTemplate }}>
            <FormProvider {...form}>
                <Outlet />
            </FormProvider>
        </TemplateContext.Provider>
    )
}

export default Root