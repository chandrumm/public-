import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './Main';

const App = () => {
  const a = [1, 2, 3, 4, 6];
  const [imag, setImag] = useState([]);

  const fun1 = (image) => {
    setImag(prev => {
      if (prev.includes(image)) {
        return prev.filter((v) => v !== image);
      } else {
        return [...prev, image];
      }
    });
  };

  return (
    <div>
      <h1>This is image</h1>

      {a.map((v) => (
        <div key={v}>
          <img
            src="fsgd"
            alt={`fghj ${v}`}
            onClick={() => fun1(`imageId${v}`)}
          />
        </div>
      ))}
      <br />
      <h2>This is for add image</h2>
      
      <Main
    imag={imag}
           />
      <Link to="/main">hijokl</Link>
    </div>
  );
};

export default App;
