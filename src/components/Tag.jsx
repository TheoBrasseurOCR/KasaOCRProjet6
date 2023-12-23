import React, { Component } from 'react';

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { tag } = this.props;
        return(
            <div className='tag'>
                <h3>{tag}</h3>
            </div>
            )
        }
    }
  

export default Tag;