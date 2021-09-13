import React from 'react';

const Cell = (props) => {
  const color = props.color
  const isActive = props.isActive
  const handleClick = props.handleClick

  let classValue = false
    if (isActive) {
      classValue =  'cell active'
    } else {
      classValue = 'cell'
    }
  
  return <div 
    className={classValue}
    style={{backgroundColor: color}} 
    onClick={handleClick}>
    </div>
}

export default Cell;