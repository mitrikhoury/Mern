import React, { useState } from 'react';
import './style.css';

function BoxGenerator() {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      const newBox = { color, size: '100px' }; // Default size
      setBoxes([...boxes, newBox]);
      setColor('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              height: box.size,
              width: box.size
            }}
            className="box"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BoxGenerator;
