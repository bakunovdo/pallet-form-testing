import React from 'react';
import {useDispatch, useSelector} from "react-redux";


import {deleteColor, setPickColor} from "../store/palletteReducer";
import {ColorItem} from "./СolorItem";

export const ListColors = (props) => {
    const colors = useSelector(state => state.pallete.colors)
    const dispatch = useDispatch()

    const clickHandler = (id) => {
        props.openPick()
        dispatch(setPickColor({id}))
    }

    return (
        <div className="colors">
            {colors && colors.length > 0 && (
                colors.map(col => (
                    <ColorItem key={col.id}
                               changeColor={() => clickHandler(col.id)}
                               backColor={col.hex}
                               deleteColor={() => dispatch(deleteColor(col.id))}
                    />
                ))
            )}
        </div>
    );
};


