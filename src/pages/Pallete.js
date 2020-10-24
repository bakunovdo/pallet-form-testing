import React, {useState} from 'react';
import {ChromePicker} from 'react-color';

import {useDispatch, useSelector} from 'react-redux';

import {createColor, onChangeById} from "../store/palletteReducer";

import {ListColors} from "../components/ListColors";

import "./Pallete.scss"

const popover = {
    position: 'absolute',
    bottom: "60px",
    zIndex: '2',
}

const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
}

export const Pallete = () => {
    const [showPicker, setShowPicker] = useState(false)
    const [pickColor, setPickColor] = useState("#b35555")

    const dispatch = useDispatch()

    const curColor = useSelector(state => state.pallete.currentPickColor)

    const handleChange = (color) => {
        setPickColor(color)
        dispatch(onChangeById({id: curColor.id, color}))
    }

    const addColorClick = () => {
        dispatch(createColor())
        setShowPicker(true)
    }

    return (
        <div className="page-pallete">

            <ListColors openPick={() => setShowPicker(true)}/>

            <div className="pickColor">
                {showPicker ? <div style={popover}>
                    <div style={cover} onClick={() => setShowPicker(false)}/>
                    <ChromePicker color={pickColor} onChange={handleChange}/>
                </div> : null}

                <div className="form-submit btn primary" onClick={addColorClick}>
                    Добавить цвет
                </div>
            </div>
        </div>
    );
};


