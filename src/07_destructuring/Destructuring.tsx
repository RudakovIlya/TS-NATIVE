import React, {useState} from 'react';
import {ManType} from "./destructuring.test";

type DestructuringPropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

const Destructuring: React.FC<DestructuringPropsType> = ({title, man: {name, lessons}, ...props}) => {
    const [message, setMessage] = useState(title);

    return (
        <div>
            <h1>{title}</h1>
            <div>{name}</div>
        </div>
    );
};

export default Destructuring;