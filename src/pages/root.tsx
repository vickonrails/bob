import { FormFields } from "@/components/ui/basic-information-dialog";
import { Outlet } from "@tanstack/react-router";
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
    workExperience: [{
        highlights: [{ text: '' }]
    }],
    education: []
}

function Root() {
    const form = useForm<FormFields>({ defaultValues })

    return (
        <FormProvider {...form}>
            <Outlet />
        </FormProvider>
    )
}

export default Root