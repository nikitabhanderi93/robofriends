import React from "react";

// props is the combinations of all the paraeters or properties
// const Card = (props) => {
const Card = ({name, email,id}) => {
    // const {name, email,id}=props;
    return(
        <div className='bg-light-green pa3 ma2 br3 grow dib bw2 shadow-5'>
            <img alt="Robots" src={`https://robohash.org/ ${id}?200*200`}/>
            <div className='tc'>
                {/* <h3>{props.name}</h3> */}
                <h3>{name}</h3>
                {/* <p>{props.email}</p> */}
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card;