import { MenubarProps } from "@radix-ui/react-menubar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar"

interface MoreOptionsMenuProps extends MenubarProps {
    trigger: React.ReactNode
    onDownloadPDF: () => void
    onResetForm: () => void
}

export function MoreOptions({ trigger, onDownloadPDF, onResetForm }: MoreOptionsMenuProps) {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="h-full px-1">{trigger}</MenubarTrigger>
                <MenubarContent side='bottom' align="end">
                    <MenubarItem onClick={onDownloadPDF}>Download PDF</MenubarItem>
                    <MenubarItem onClick={onResetForm} className="text-destructive focus:text-red-400">Reset Form</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}