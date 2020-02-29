import Card from "./Card";
import React from 'react';

class CardList extends Card{

    render(){
        return( 
            <div>
            {
                this.props.robots.map((users) => {
                    return <Card key={users.id} id={users.id} name={users.name} email={users.email}/>;
                })
            }
            </div>
            );
        }
    }
    
    export default CardList;