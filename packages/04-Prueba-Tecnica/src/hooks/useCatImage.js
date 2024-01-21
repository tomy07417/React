import { useState, useEffect } from 'react'

export const useCatImage = ({ fact }) => {
    const [urlCat, setUrlCat] = useState(false)
  
    useEffect(() => {
      if(!fact) return
  
      const firstThreeWords = fact.split(' ', 3).join()
  
      fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`)
        .then(response => response.json())
        .then(data => {
          const {_id} = data
          setUrlCat(`/cat/${_id}/says/${firstThreeWords}`)
        })
    }, [fact])
  
    return {urlCat}
  }