import React from 'react';

const footer = () => {
  const style = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginTop: '8px',
    color: '#ffffff',
    textShadow: '0 2px 3px #a3a3a3'
  };

  return (
    <div style={style}>
      <p>
        <a href="https://github.com/frsposito/tomadoro">tomadoro</a>{` `}
        by <a href="https://github.com/frsposito">Francesco Esposito</a>
      </p>
    </div>
  );
  
};

export default footer;