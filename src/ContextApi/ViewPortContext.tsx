import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { viewPortPorps } from "./ViewPortContext.types";


const viewportContext = createContext<viewPortPorps>({
    isMobile: window.outerWidth < 769,
})
export const ViewPortProvider = ({ children }: ReactNode | any) => {
    const [isMobile, setMobile] = useState<Boolean | any>(window.outerWidth < 769);

    //handle resize event 
    useEffect(() => {
        window.addEventListener('resize', () => setMobile(window.outerWidth < 769));
        return window.removeEventListener('resize', () => setMobile(window.outerWidth < 769));
    }, [])
    return (
        <viewportContext.Provider value={{ isMobile }}>
            {children}
        </viewportContext.Provider>
    )
}

export function useViewPort() {
    return useContext<viewPortPorps>(viewportContext);
}