import { useCallback, createContext, useState, useEffect, UIEvent } from "react";

interface ScrollProviderProps {
    children: React.ReactElement
}

export const ScrollContext = createContext<any>({})


const ScrollProvider= ({ children }: ScrollProviderProps) => {
    const [navColor, setNavColor] = useState('')
    const [scrollHeight, setScrollHeight] = useState(0)
    
    const handleScroll = useCallback(() => {
        setScrollHeight(window.scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
    <ScrollContext.Provider value={{
        handleScroll, setNavColor, navColor, scrollHeight, setScrollHeight

    }}>
    { children }

    </ScrollContext.Provider>)
}

export default ScrollProvider