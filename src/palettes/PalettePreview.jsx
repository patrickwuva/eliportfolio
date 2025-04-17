import React from 'react';
import './p1.css'; // or dynamically import based on props

const PalettePreview = ({ name }) => {
  return (
    <div className="palette-preview">
      <h1>{name}</h1>
      <div className="card">
        <h2>Sample Section</h2>
        <p>This shows a paragraph styled with a color palette.</p>
        <button>Try Me</button>
      </div>
    </div>
  );
};

export default PalettePreview;
