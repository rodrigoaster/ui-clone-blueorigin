import React, { ReactNode } from "react"

interface SectionData {
    section: string;
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface SectionContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredSection: SectionData[]
    registerSection: (section: SectionData) => void
    unregisterSection: (section: SectionData) => void
    getSectionByName: (section: SectionData) => SectionData | null  
}

export default React.createContext<SectionContext>({} as SectionContext)