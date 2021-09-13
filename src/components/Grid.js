import React from 'react';
import Cell from './Cell';

const Grid = (props) => {

  const activeColor = props.activeColor
  const cellList = props.cellList
  const setCellList = props.setCellList

  return <div className="grid">
    {
      cellList.map((cell, index) => {
        return <Cell 
          key={index}
          color={cell.color}
          handleClick={() => {
            const newCellList = [...cellList]
            newCellList[index].color = activeColor
            setCellList(newCellList)
          }}
        />
      })
    }
  </div>
}

export default Grid;