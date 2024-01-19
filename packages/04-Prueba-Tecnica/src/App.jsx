import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

const URL_API_FACTS = "https://catfact.ninja/fact"
const URL_CAT_ROOT = "https://cataas.com"

function App() {
  const [fact, setFact] = useState(false)
  const [urlCat, setUrlCat] = useState(false)

  useEffect(() => {
    fetch(URL_API_FACTS)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

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

  return (
    <>
      <h1>Prueba Tecnica</h1>
      {fact && <p>{fact}</p>}
      {urlCat && <img src={URL_CAT_ROOT+urlCat}/>}
    </>
  )
}

export default App
