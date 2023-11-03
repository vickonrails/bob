import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog';
import { useForm, useFormContext } from 'react-hook-form';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { useNavigate } from '@tanstack/react-router';

interface WorkExperience {
    title?: string
    company?: string
    location?: string
    startDate?: string
    endDate?: string
    summary?: string
}

interface OtherProjects {
    title?: string
    url?: string
    description?: string
    impact?: string
    technologies?: string[]
}

interface Education {
    school?: string
    degree?: string
    fieldOfStudy?: string
    startDate?: string
    endDate?: string
    summary?: string
    location?: string
}

export interface FormFields {
    fullname?: string
    title?: string
    email?: string
    location?: string
    phoneNumber?: string
    website?: string
    summary?: string

    skills?: { skill: string }[]
    workExperience: WorkExperience[]
    otherProjects?: OtherProjects[]
    education?: Education[]
}

function BasicInformationDialog({ ...rest }: DialogProps) {
    // const { handleSubmit, register } = useForm<FormFields>()
    const { register } = useFormContext<FormFields>()
    const navigate = useNavigate()

    // const onSubmit = (data: FormFields) => {
    //     console.log(data)
    // }

    return (
        <Dialog
            {...rest}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Basic Information</DialogTitle>
                </DialogHeader>

                <main className='grid grid-cols-2 gap-6'>
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
                        placeholder="Should match job title"
                        label="Job Title"
                        {...register('title')}
                    />
                    <Input
                        placeholder="City, Country"
                        label="Location"
                        {...register('location')}
                    />
                    <Textarea
                        placeholder="Brief career overview, achievements, present competence and future goals."
                        label="Professional Summary"
                        wrapperClassName="col-span-2"
                        rows={5}
                        {...register('summary')}
                    />
                </main>

                <DialogFooter>
                    <Button onClick={() => navigate({ to: '/builder' })}>Proceed to Builder</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

// fullname
// title
// email address
// location

// Contact Information
// - name
// - Email address
// - location
// - phone number
// - linkedin, twitter, website, other links
// Short Bio
// - short bio describing your achievements
// Skills and tools
// - list with ability to add more
// Work Experience
// - Job Title
// - Company
// - Job location
// - Start date
// - end date
// - description
// - impact
// Other projects
// - role
// - description
// - impact
// - link

// Certifications & Awards
// - title
// - description
// - link
// Education
// - school
// - degree
// - field of study
// - start date
// - end date
// - description

export default BasicInformationDialog