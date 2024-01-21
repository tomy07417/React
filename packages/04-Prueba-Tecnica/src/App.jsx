import { useFact } from './hooks/useFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

const URL_CAT_ROOT = "https://cataas.com"

function App() {
  const [fact, refreshFact] = useFact()
  const {urlCat} = useCatImage({fact})

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <>
      <h1>Prueba Tecnica</h1>
      <main style={{
        'display':'flex',
        'flexDirection':'row'
      }}>
        {fact && <p style={{
          'width':500
        }}>{fact}</p>}
        {urlCat && <img src={URL_CAT_ROOT+urlCat} style={{
          'height':300,
          'width':300
        }}/>}
      </main>
      <button onClick={handleClick}>Cambiar Fact</button>
    </>
  )
}

export default App
