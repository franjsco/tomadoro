import React from 'react';

const headbar = () => {
  const style = {
    display: 'flex',
    minHeight: '5vh',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '44px',
    color: 'white',  
    textShadow:  '0 2px 4px #909090', 
    marginBottom: '6px'
  };

  return (
    <div style={style}>
      tomadoro
    </div>
  );
};


export default headbar;