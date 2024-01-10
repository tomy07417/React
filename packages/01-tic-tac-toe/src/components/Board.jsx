import {Square} from './Square.jsx'
 
export function Board({board, changeBoard}) {

    return (
        <section className='game'>
        {
          board.map((square ,index) => {
            return (
              <Square 
              index = {index}
              changeBoard = {changeBoard}
              key={index}
              >
                {board[index]}
              </Square>
            )
            })
        }
      </section>
    )
}