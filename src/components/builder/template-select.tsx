import { useResumeTemplate } from "@/hooks/useResumeTemplate"
import { TemplateType } from "@/pages/root"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export function TemplateSelect() {
    const template = useResumeTemplate()
    return (
        <Select defaultValue={template?.name} onValueChange={(val: TemplateType) => template?.switchTemplate(val)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="plain">Plain</SelectItem>
                <SelectItem value="mature">Mature</SelectItem>
            </SelectContent>
        </Select>
    )
}