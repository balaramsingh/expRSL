import React from 'react';


const TextCard =props=>{
    return(
        <div className="card text-center shadow">
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
            </div>
            <p className="card-text">
            {props.text}
            </p>
        </div>
    );
}

export default TextCard;