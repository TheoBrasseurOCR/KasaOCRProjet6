import React, { useState } from 'react';

function InfosCollapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className='collapse'>
          <div className='collapse_button' onClick={toggleCollapse}>
            <h2>{title}</h2>
            <div className={`arrow-container ${isOpen ? "arrow-container-up" : ""}`}>
            </div>
          </div>
          {isOpen && <div className='collapse_content'>{content}</div>}
        </section>
      );
};

export default InfosCollapse;

