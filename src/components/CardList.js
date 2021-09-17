import React from "react";
import Card from './Card'

const CardList = ({robots}) => {
    /* const cardsArray = robots.map((user,i) => {
    //     return (
    //         <Card 
    //             key={i} 
    //             id={robots[i].id} 
    //             name={robots[i].name} 
    //             email={robots[i].email}
    //         />
    //     );
     })*/
    if(false){
    throw new Error('Noooooo!');}

    return(
    <div>
    {
        robots.map((user,i) => {
            return (
                <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />
            );
        })
    }
    </div>
    );
}

export default CardList;

/* key prop should have something that doesnt change.for example array index could change
if array item get ChannelMergerNode. so better key in this case would be something unique like id*/