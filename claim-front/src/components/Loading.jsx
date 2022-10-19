import React from 'react';

const Loading = () => {
    return (
    <div>
        <div className='altura'></div>
        
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p> Loading...</p>
        </div>
        
        <div className='altura'></div>
    </div>
    
  );
}

export default Loading;
