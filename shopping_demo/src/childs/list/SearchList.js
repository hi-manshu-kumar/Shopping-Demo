import React from 'react';
import {Product} from './product/Product';

export const SearchList = (props) => {
    var jsx =<h1>Item are </h1>;
    jsx = props.list.length>0?jsx:<h2>No Records</h2>
    console.log("JSX is ",typeof jsx);
    return (
        <div>
            {jsx}
            <fieldset>
                <legend>Product List</legend>
                {props.list.length}
                {props.list.map(mobileObject=>{
                    return <Product key={mobileObject.id} mobile={mobileObject}/>
                })}
            </fieldset>
        </div>
    );
}

