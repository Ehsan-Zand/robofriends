import React, { Component } from 'react';

class SearchBox extends Component {
    render(){
        return(
            <div className='pa2'>
                <input className='pa3 ba b--green bg-lightest-blue'
                 type="search" placeholder="Search Robots"
                 onChange={this.props.onSearchChange} />
            </div>
            )
        }
    }
    export default SearchBox;