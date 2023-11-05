import BasicInformationDialog from "@/components/ui/basic-information-dialog"
import { useDialog } from "@/hooks/useDialog"
import { useResumeTemplate } from "@/hooks/useResumeTemplate"
import { useCallback } from "react"
import { TemplateType } from "./root"

function Index() {
    const { isOpen, openDialog, setOpen } = useDialog({})

    return (
        <div className="bg-muted min-h-full">
            <div className="hero bg-white">
                <header className="text-center py-20 flex flex-col gap-4 max-w-xl mx-auto items-center">
                    <h1 className="text-6xl/tight font-bold">Build simple and Effective Resumes</h1>
                    <p className="text-xl text-muted-foreground">Bob is a free, safe, open source resume builder. No accounts required, no data collected, works well with Application Tracking Systems. Select a template below to begin...</p>
                </header>
            </div>

            <section className="py-11" id="templates">
                <div className="max-w-7xl mx-auto">
                    <Templates openDialog={openDialog} />
                </div>
            </section>

            <footer className="py-4 text-muted-foreground text-center text-sm">
                &copy; {new Date().getFullYear()} Bob. All rights reserved.
            </footer>

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
        <div className="flex gap-4 justify-center">
            <button onClick={() => handleSelect('plain')}>
                <img
                    src="/plain.png"
                    width={400}
                    className="cursor-pointer bg-contain"
                />
            </button>

            <button onClick={() => handleSelect('mature')}>
                <img
                    src="/mature.png"
                    width={400}
                    className="cursor-pointer bg-cover"
                />
            </button>
        </div>
    )
}

export default Index