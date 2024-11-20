import { useEffect } from 'react';
import './App.css';
import "../public/magiczoomplus.css";  // Make sure this path is correct
import "../public/magiczoomplus.js";  // Make sure this path is correct

function App() {
  useEffect(() => {
    // Initialize MagicZoom Plus when the component is mounted
    if (window.MagicZoom) {
      window.MagicZoom.init();  // Initialize the MagicZoom Plus functionality
    }
  }, []);

  return (
    <div className="App">
      <a 
        id="Zoom-1" 
        className="MagicZoom" 
        href="https://magictoolbox.sirv.com/images/magiczoomplus/colorful-colors-1.jpg?h=1400" 
        data-zoom-image-2x="https://magictoolbox.sirv.com/images/magiczoomplus/colorful-colors-1.jpg?h=2800" 
        data-image-2x="https://magictoolbox.sirv.com/images/magiczoomplus/colorful-colors-1.jpg?h=800"
      >
        <figure className="mz-figure mz-hover-zoom mz-inner-zoom mz-ready">
          <img 
            src="https://magictoolbox.sirv.com/images/magiczoomplus/colorful-colors-1.jpg?h=400" 
            srcSet="https://magictoolbox.sirv.com/images/magiczoomplus/colorful-colors-1.jpg?h=800 2x" 
            alt="Colorful Colors" 
            style={{ maxWidth: '320px', maxHeight: '400px' }} 
          />
          <div 
            className="mz-lens" 
            style={{
              top: 0,
              transform: 'translate(-10000px, -10000px)',
              width: '92px',
              height: '115px',
            }}
          >
            <img 
              src="https://magictoolbox.sirv.com/images/magiczoomplus/colorful-colors-1.jpg?h=400" 
              style={{
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '320px', 
                height: '400px', 
                transform: 'translate(-229px, -204.5px)',
              }} 
              alt="Lens" 
            />
          </div>
          <div className="mz-nav-controls">
            <button type="button" title="Previous" className="mz-button mz-button-prev"></button>
            <button type="button" title="Next" className="mz-button mz-button-next"></button>
            <button type="button" title="Close" className="mz-button mz-button-close" style={{ visibility: 'hidden' }}></button>
          </div>
        </figure>
      </a>
    </div>
  );
}

export default App;
