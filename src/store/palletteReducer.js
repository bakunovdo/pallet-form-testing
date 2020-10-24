import {createSlice} from "@reduxjs/toolkit";

const palleteSlice = createSlice({
    name: "pallete",
    initialState: {
        colors: [],
        currentPickColor: {
            id: null,
            color: null
        }
    },
    reducers: {
        setPickColor: (state, action) => {
            return {
                ...state,
                currentPickColor: state.colors.filter(col => col.id === action.payload.id)[0]
            }
        },
        createColor: (state, action) => {
            const newColor = {id: new Date().getTime()}
            return {
                ...state,
                colors: [...state.colors, newColor],
                currentPickColor: {
                    id: newColor.id,
                    color: "#b35555"
                }
            }
        },
        onChangeById: (state, action) => {
            return {
                ...state,
                colors: state.colors.map(col => {
                    return col.id === action.payload.id
                        ? {...col, ...action.payload.color}
                        : col
                })
            }
        },
        deleteColor: (state, action) => {
            return {
                ...state,
                colors: state.colors.filter(col => col.id !== action.payload)
            }
        }
    }
})

export const {
    setPickColor,
    onChangeById,
    createColor,
    deleteColor
} = palleteSlice.actions

export const palleteReducer = palleteSlice.reducer




