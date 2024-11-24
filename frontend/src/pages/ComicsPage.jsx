import React from 'react'
import { useComics } from '../context/ComicContext'

function ComicsPage() {
const { getComics, comics } = useComics()

    useEffect(() => {
      getComics()
    }, [])

    if (comics.length === 0) return ( <h1>No Comics</h1> )
    
  return (
    <div>{
        comics.map((comic) => (
            <div key={comic._id}>
                <h1>{comic.title}</h1>
                <p>{comic.description}</p>
            </div>
        ) )
    }</div>
  )
}

export default ComicsPage