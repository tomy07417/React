export function Square({children,isSelected = false, index, changeBoard}){
    
    const handleClick = () => {
        changeBoard(index)
    }
    
    const selected = isSelected ? 'is-selected' : ''

    return (
      <span 
      onClick={handleClick}
      className={`square ${selected}`}
      >
        {children}</span>
    )
  }