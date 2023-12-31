import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Composant Collapse Logement
function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section className='collapse'>
            <div className='collapse_button' onClick={toggleCollapse}>
                <h2>{title}</h2>
                <div className={`arrow-container ${isOpen ? "arrow-container-down" : ""}`}>
                    <FontAwesomeIcon icon={faAngleDown} className='arrow' />
                </div>
            </div>
            {isOpen && <div className='collapse_content'>{content}</div>}
        </section>
    );
};

// Composant Collapses A Propos
function Collapses(props) {
    return (
        <div className='collapses'>
            {props.data && props.data.map((data, index) => {
                return (
                    <Collapse
                        key={
                            `${index}` +
                            `${Object.values(data)}`.split(" ").join("").slice(10, 20)
                        }
                        title={Object.keys(data)}
                        content={Object.values(data)}
                    />
                );
            })}
        </div>
    );
}

export { Collapse, Collapses };
