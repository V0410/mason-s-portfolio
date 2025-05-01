"use client"

import { createContext, ReactNode, useState } from "react"

type GlobalContextType = {
    modalPhoto: string,
    setModalPhoto: (modalPhoto: string) => void
}

export const GlobalContext = createContext<GlobalContextType>({
    modalPhoto: "",
    setModalPhoto: () => { }
})

export function GlobalProvider({children} : {children: ReactNode}) {
    const [modalPhoto, setModalPhoto] = useState("");

    return <GlobalContext.Provider value={{modalPhoto, setModalPhoto}}>
        {children}
    </GlobalContext.Provider>
}