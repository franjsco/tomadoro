import React from 'react';

const headbar = () => {
  const style = {
    display: 'flex',
    minHeight: '4vh',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '44px',
    color: 'white',  
    textShadow:  '0 2px 2px #1f1f1f', 
    marginBottom: '2px'
  };

  return (
    <div style={style}>
      tomadoro
    </div>
  );
};


export default headbar;