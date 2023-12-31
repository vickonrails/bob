
import { Contact2 } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { SectionItemContainer } from "../builder/layout"
import { FormFields } from "../ui/basic-information-dialog"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import SectionContainer from "./section-container"

export function ContactInformationSection() {
    const { register } = useFormContext<FormFields>()
    return (
        <SectionContainer
            title="Contact Information"
            description="Basic information about yourself. How and where people can find more information about you."
            icon={<Contact2 size={40} className="text-primary" />}
        >
            <SectionItemContainer className="grid grid-cols-2 gap-6">
                <Input
                    placeholder="Surname, Firstname"
                    label="Full name"
                    {...register('fullname')}
                />
                <Input
                    type="email"
                    label="Email Address"
                    {...register('email')}
                />
                <Input
                    placeholder="Should match with the job description"
                    label="Job Title"
                    {...register('title')}
                />
                <Input
                    placeholder="City, Country"
                    label="Location"
                    {...register('location')}
                />
                <Input
                    label="Website"
                    type="url"
                    {...register('website')}
                />
                <Input
                    label="Phone Number"
                    type="tel"
                    {...register('phoneNumber')}
                />
                {/* TODO:: add a getting too long hint once things start to get quite long */}
                <Textarea
                    placeholder="Brief career overview, achievements, present competence and future goals."
                    label="Professional Summary (30 word-ish)"
                    wrapperClassName="col-span-2"
                    rows={5}
                    {...register('summary')}
                />
            </SectionItemContainer>
        </SectionContainer>
    )
}