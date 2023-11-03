import { FormFields } from "@/components/ui/basic-information-dialog";
import { Outlet } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

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

export type Template = 'plain' | 'mature'

interface TemplateContextProps {
    name: Template
    switchTemplate: (name: Template) => void
}

const TemplateContext = createContext<TemplateContextProps | null>(null);

export function useResumeTemplate() {
    return useContext(TemplateContext);
}

function Root() {
    const form = useForm<FormFields>({ defaultValues });
    const [template, setTemplate] = useState<Template>('plain')

    const switchTemplate = (name: Template) => {
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