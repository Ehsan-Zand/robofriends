import React, { Component } from 'react';

class Card extends Component {
    render(){
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robats' src={`https://robohash.org/${this.props.id}?size=200x200`}/>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
            </div>
            );
        }
    }
    
    export default Card;