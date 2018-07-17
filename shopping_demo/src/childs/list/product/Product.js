import React  from 'react';

export const Product = (props)=>{
    return (
        <div key={props.mobile.id}> 
        <li className={props.mobile.id>1001?'red':'green'}> 
            {props.mobile.id} 
            {props.mobile.name}
            {props.mobile.price}
            <img src={props.mobile.url} alt=""/>
        </li>
        <button>Add to Cart</button>
       </div>
    );
}