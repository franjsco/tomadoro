import React from 'react';

const footer = () => {
  const style = {
    marginTop: '2px'
  };

  return (
    <div style={style}>
      <p>
        <a href="https://github.com/franjsco/tomadoro">tomadoro</a>{` `}
        by <a href="https://github.com/franjsco">Francesco Esposito</a>
      </p>
    </div>
  );
  
};

export default footer;