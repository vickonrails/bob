import BasicInformationDialog from "@/components/ui/basic-information-dialog"
import { buttonVariants } from "@/components/ui/button"
import { useDialog } from "@/hooks/useDialog"
import { cn } from "@/lib/utils"
import { TemplateType, useResumeTemplate } from "./root"

function Index() {
    const { isOpen, openDialog, setOpen } = useDialog({})
    return (
        <div className="bg-muted min-h-full">
            <div className="hero bg-white">
                <header className="text-center py-28 flex flex-col gap-4 max-w-lg mx-auto items-center">
                    <h1 className="text-6xl/tight font-bold">Build simple and Effective Resumes</h1>
                    <p className="text-xl text-muted-foreground">Resume is a free, safe, open source resume builder. No accounts required, no data collected, works well with Application Tracking Systems. </p>
                    <a href='#templates' className={cn(buttonVariants({ variant: "default" }), 'text-lg')}>Select a Template</a>
                </header>
            </div>

            <section className="py-11" id="templates">
                <div className="h-96 max-w-7xl mx-auto">
                    <Template openDialog={openDialog} />
                </div>
            </section>

            <BasicInformationDialog open={isOpen} onOpenChange={setOpen} />
        </div>
    )
}

function Template({ openDialog }: { openDialog: () => void }) {
    const templateCtx = useResumeTemplate();

    const handleSelect = (name: TemplateType) => {
        templateCtx?.switchTemplate(name)
        openDialog()
    }

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