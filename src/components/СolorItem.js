import React, {useState} from 'react';
import {CrossCircle} from "../assets/CrossCircle";

export const ColorItem = ({changeColor, backColor, deleteColor}) => {
    const [onHover, setOnHover] = useState(false)

    const deleteHandler = (event) => {
        event.stopPropagation()
        deleteColor()
    }

    return (
        <div
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className="color-item"
            onClick={changeColor}
            style={{backgroundColor: backColor}}
        >
            {onHover && (
                <div className="delete-icon" onClick={deleteHandler}>
                    <CrossCircle/>
                </div>)}
        </div>
    );
};


