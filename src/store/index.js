import { configureStore } from "@reduxjs/toolkit";

import {palleteReducer} from "./palletteReducer";

export const store = configureStore({
    reducer: {
        pallete: palleteReducer
    }
})