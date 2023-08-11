import { useState, useEffect } from 'react';
import './BoardContent.scss';
import Column from '../Column/Column';
import { MockData } from '../../actions/MockData';
import { Container, Draggable } from 'react-smooth-dnd';
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

  const onColumnDrop = (dropResult) => {
    console.log('weeeee', dropResult)
  }

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
        <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'tasks-drop-preview'
        }}
        >
          { columns && columns.length > 0 && columns.map((column, index) => {
            return (
              <Draggable key={column.id} >
                <Column column={column} />
              </Draggable>
            )
          })}
        </Container>
      </div>
    </>
  )

}

export default BoardContent;