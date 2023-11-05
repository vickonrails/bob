import { FormFields } from "@/components/ui/basic-information-dialog";
import { Outlet } from "@tanstack/react-router";
import { createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

export type TemplateType = 'plain' | 'mature'

interface TemplateContextProps {
    name: TemplateType
    switchTemplate: (name: TemplateType) => void
}

export const TemplateContext = createContext<TemplateContextProps | null>(null);

function Root() {
    // if something exists in local storage, use it. Else use this defaultValues
    const form = useForm<FormFields>({});
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