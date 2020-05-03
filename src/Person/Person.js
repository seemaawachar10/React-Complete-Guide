import React from 'react';

const person = (props) =>{
return <div>
    <p>I am a {props.name} and I am of {Math.floor(Math.random()*30)} years of old.
    </p>
<p>{props.name}:{props.children}</p></div>
}

export default person;