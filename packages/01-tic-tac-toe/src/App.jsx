import {Board} from './components/Board.jsx'
import {Winner} from './components/Winner.jsx'
import { Square } from './components/Square.jsx'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import './index.css'

function App() {

  const [board, setBoard] = useState(() =>{
    const localStorangeBoard = window.localStorage.getItem('board')
    return JSON.parse(localStorangeBoard) ?? Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const localStorageTurn = window.localStorage.getItem('turn')
    return localStorageTurn ?? 'X'
  })
  const [winner, setWinner] = useState(null) // true win | false tie

  const checkWinner = (lastBoard) => {
    //chequeo las columnas
    for (let index = 0; index <= 2; index++ ){
      if (lastBoard[index] != null && 
        lastBoard[index] == lastBoard[index+3] &&
        lastBoard[index] == lastBoard[index+6]){
          confetti()
          return setWinner(lastBoard[index])
        }
    }
    //chequeo las filas
    for (let index = 0; index <= 2; index++ ){
      if (lastBoard[index*3] != null && 
        lastBoard[index*3] == lastBoard[index*3+1] &&
        lastBoard[index*3] == lastBoard[index*3+2]){
          confetti()
          return setWinner(lastBoard[index*3])
        }
    }
    //chequeo las diagonales
    for (let index = 0; index < 2; index++ ){
      if (lastBoard[index*2] != null && 
        lastBoard[index*2] == lastBoard[4] &&
        lastBoard[index*2] == lastBoard[8 - index*2]){
          confetti()
          return setWinner(lastBoard[index*2])
        }
    }
    if(!lastBoard.includes(null)){
      return setWinner(false)
    }
  }

  const changeBoard = (index) => {

      if (board[index]) return

      const newBoard = [... board]
      newBoard[index] = turn
      
      setBoard(newBoard)
      const newTurn = turn == 'X' ? 'O' : 'X'
      setTurn(newTurn)

      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', newTurn)

      checkWinner(newBoard)
  }

  const setGame = () => {
    setBoard(Array(9).fill(null))
    setTurn('X')
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (

    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <Board board={board} changeBoard={changeBoard}/>
      
      <section className='turn'>
        <Square isSelected={turn == 'X'}>X</Square>
        <Square isSelected={turn == 'O'}>O</Square>
      </section>

      <Winner winner={winner} resetGame={setGame} />
    </main>
  )
}

export default App
