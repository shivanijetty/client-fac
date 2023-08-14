import { useState, useEffect } from 'react';
import './BoardContent.scss';
import Column from '../Column/Column';
import { MockData } from '../../actions/MockData';
import _ from 'lodash';

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardData = MockData.boards.find(item => item.id === 'board-1')
    if (boardData) {
      setBoard(boardData)
      setColumns(boardData.columns)
    }
  },[])

  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Calendar not found</div>
      </>
    )
  }
  

  return (
    <>
      <div className="board-columns">
        { columns && columns.length > 0 && columns.map((column, index) => {
          return (
            <Column 
              key={column.id} 
              column={column}
            />
          )
        }) }
        
        

      </div>
    </>
  )

}

export default BoardContent;