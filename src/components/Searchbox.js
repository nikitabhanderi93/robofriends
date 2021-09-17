import React from "react";
import 'tachyons'; 

const Searchbox = ({searchfield,searchChange}) => {
    return (
        <div>
            <input
            className="bg-light-green pa2 ma3 br3" 
            type="text" 
            placeholder="search robot"
            onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;