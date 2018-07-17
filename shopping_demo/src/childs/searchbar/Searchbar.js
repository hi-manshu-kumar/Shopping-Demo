import React from 'react';

export const SearchBar = (props) => {
    return (
        <div>
            <label htmlFor="">Search</label>
            <input type="text" onChange={props.takeChildInput} placeholder={props.searchplaceholder} />
            <button onClick={props.parentfn}>Search</button>
        </div>
    );
}
