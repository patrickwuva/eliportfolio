import React from 'react';
import PalettePreview from './palettes/PalettePreview';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontFamily: 'Montserrat, sans-serif' }}>Color Palette Comparison</h1>
      <PalettePreview name="Palette 1" />
    </div>
  );
}

export default App;
