import { createContext, useContext } from "react";
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

    const getComics = async() => {
        const res = await getComicRequest()
        console.log(res);
        
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