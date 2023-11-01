import { useState } from "react";

interface DialogProps {
    onOk?: () => void;
}

export function useDialog({ onOk }: DialogProps) {
    const [isOpen, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }

    const okFn = () => {
        try {
            onOk && onOk();
        } catch {
            // setState
        }
    }

    return { isOpen, openDialog, okFn, setOpen }
}