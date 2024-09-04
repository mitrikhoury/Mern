import React from 'react';

const PersonCard = (props) => <div>
    <h1>{props.firstName} , {props.lastName}</h1>
    <p>{props.age}</p>
    <p>Hair Color :{props.hairColor}</p>         
    </div>

export default PersonCard;
