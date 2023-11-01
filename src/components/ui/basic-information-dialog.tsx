import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { DialogProps, DialogTitle } from '@radix-ui/react-dialog';

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
}

interface Education {
    school?: string
    degree?: string
    fieldOfStudy?: string
    startDate?: string
    endDate?: string
    summary?: string
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
    // const { handleSubmit, register } = useForm<FormFields>({ defaultValues: resumeValues })

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
                    <p>This is the basic information dialog.</p>
                </DialogHeader>

                {/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <Input {...register('fullname')} />
                    <Input {...register('title')} />
                    <Input {...register('email')} />
                    <Input {...register('location')} />
                    <Button>Continue</Button>
                </form> */}
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