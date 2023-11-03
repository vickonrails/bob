import { Trash2 } from "lucide-react"
import { Button } from "../ui/button"

interface SectionItemFooterProps {
    onRemoveBlock: () => void
    onAddHighlight: () => void
}

export function SectionItemFooter({ onRemoveBlock, onAddHighlight }: SectionItemFooterProps) {
    return (
        <div className="flex gap-2">
            <Button type="button" onClick={onAddHighlight}>Add Highlight</Button>
            <Button variant='outline' className="text-destructive hover:text-red-600" onClick={onRemoveBlock}>
                <Trash2 size={18} className="mr-2" />
                <span>Remove Block</span>
            </Button>
        </div>
    )
}