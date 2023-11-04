import { TemplateContext, } from "@/pages/root";
import { useContext } from "react";

function useResumeTemplate() {
    return useContext(TemplateContext);
}

export { useResumeTemplate };
