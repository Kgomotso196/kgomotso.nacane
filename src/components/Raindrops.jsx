import React from 'react';
import '../styles/Raindrops.css';

const Raindrops = () => {
  const numColumns = 500;
  const numRows = 500;

  const raindropRows = [];

  for (let i = 0; i < numRows; i++) {
    const raindropElements = [];
    for (let j = 0; j < numColumns; j++) {
      raindropElements.push(
        <div className="rain" key={`${i}-${j}`}></div>
      );
    }
    raindropRows.push(
      <div className="rain-row" key={i}>
        {raindropElements}
      </div>
    );
  }

  return <div className="rain-container">{raindropRows}</div>;
}

export default Raindrops;
