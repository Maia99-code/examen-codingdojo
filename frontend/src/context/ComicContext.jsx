import { createContext, useContext, useState } from "react";
import { createComicsRequest, getComicRequest } from "../api/comics";






const ComicContext = createContext();

export const useComics = () => {
    const context = useContext(ComicContext);

    if(!context){
        throw new Error("useComics must be used within a ComicProvider")
    }

    return context;
}

export function  ComicProvider({ children }){
    const [comics, setComics] = useState([])

    const getComics = async () => {
        try{
        const res = await getComicRequest()
        setComics(res.data)
    } catch (error){
        console.log(error);
        
    }
        
    }  

    const createComics = async (comic) =>{
        const res = await createComicsRequest(comic)
    }
    return (
        <ComicContext.Provider value={{
            comics,
            createComics,
            getComics,
        }}>
            {children}
        </ComicContext.Provider>
    )
}