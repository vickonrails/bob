import { UseFieldArrayRemove } from "react-hook-form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export interface HighlightPropTypes {
    index: number
}

export function HighlightForm({ isFirst, id, formProps, remove }: { isFirst: boolean, id: string, formProps: any, remove: UseFieldArrayRemove }) {
    return (
        <>
            <Textarea
                rows={2}
                className="min-h-fit"
                key={id}
                label={isFirst ? 'Highlight (Impact)' : ''}
                placeholder={isFirst ? 'Enter your impact during this period' : ''}
                {...formProps}
            />
            <div className="flex justify-end">
                <Button
                    variant='link'
                    onClick={() => remove()}
                    className="p-0 h-auto text-xs text-muted-foreground"
                    type="button"
                >
                    Remove
                </Button>
            </div >
        </>
    )
}