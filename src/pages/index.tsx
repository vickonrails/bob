import { Button } from "@/components/ui/button"
import BasicInformationDialog from "@/components/ui/basic-information-dialog"
import { useDialog } from "@/hooks/useDialog"

const Index = () => {
    const { isOpen, openDialog, setOpen } = useDialog({})
    return (
        <div className="text-center flex flex-col gap-4 mt-10 items-center">
            <h1 className="text-4xl">Resume Builder</h1>
            <p>Click on the Link below to get started building your resume.</p>
            <Button onClick={openDialog} className="underline">Builder</Button>

            <BasicInformationDialog open={isOpen} onOpenChange={setOpen} />
        </div>
    )
}

export default Index