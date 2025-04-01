import React, { createContext, useContext, useState } from 'react'

interface PageTitleContextType {
    pageTitle: string
    setPageTitle: (title: string) => void
}

const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined)

export const PageTitleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pageTitle, setPageTitle] = useState<string>('')

    return <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>{children}</PageTitleContext.Provider>
}

export const usePageTitle = () => {
    const context = useContext(PageTitleContext)
    if (!context) {
        throw new Error('usePageTitle must be used within a PageTitleProvider')
    }
    return context
}
