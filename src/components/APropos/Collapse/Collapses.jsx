import React from 'react';
import InfosCollapse from './InfosCollapse';

function Collapses(props) {
    return (
        <div className='collapses'>
            {props.data.map((data, index) => {
                    return (
                        <InfosCollapse 
                            // Guarantee a unique key for each item in the list
                            key={
                                `${index}` +
                                `${Object.values(data)}`.split(" ").join("").slice(10, 20)
                            }
                            title={Object.keys(data)}
                            content={Object.values(data)}
                        />
                    )
                }
            )}
        </div>
    );
};

export default Collapses;

