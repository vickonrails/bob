import BasicInformationDialog from "@/components/ui/basic-information-dialog"
import { useDialog } from "@/hooks/useDialog"
import { cn } from "@/lib/utils"
import { TemplateType } from "./root"
import { buttonVariants } from "@/components/ui/button-variants"
import { useResumeTemplate } from "@/hooks/useResumeTemplate"
import { useCallback } from "react"

function Index() {
    const { isOpen, openDialog, setOpen } = useDialog({})
    const btnCTAClasses = cn(buttonVariants({ variant: "default" }), 'text-lg')

    return (
        <div className="bg-muted min-h-full">
            <div className="hero bg-white">
                <header className="text-center py-28 flex flex-col gap-4 max-w-lg mx-auto items-center">
                    <h1 className="text-6xl/tight font-bold">Build simple and Effective Resumes</h1>
                    <p className="text-xl text-muted-foreground">Resume is a free, safe, open source resume builder. No accounts required, no data collected, works well with Application Tracking Systems. </p>
                    <a href='#templates' className={btnCTAClasses}>Select a Template</a>
                </header>
            </div>

            <section className="py-11" id="templates">
                <div className="h-96 max-w-7xl mx-auto">
                    <Templates openDialog={openDialog} />
                </div>
            </section>

            <BasicInformationDialog
                open={isOpen}
                onOpenChange={setOpen}
            />
        </div>
    )
}

function Templates({ openDialog }: { openDialog: () => void }) {
    const templateCtx = useResumeTemplate();

    const handleSelect = useCallback((name: TemplateType) => {
        templateCtx?.switchTemplate(name)
        openDialog()
    }, [openDialog, templateCtx])

    // TODO: use the template from local storage
    // TODO: add other template pictures
    return (
        <button onClick={() => handleSelect('plain')}>
            <img
                src="/resume-sample.png"
                width={300}
                className="cursor-pointer"
            />
        </button>
    )
}

export default Index