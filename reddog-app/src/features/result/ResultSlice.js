import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxPoint: 100,
    gameCount: 1,
}

const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        gameResult: (state, action = {payload: 0}) => {
            
            if( state.maxPoint < action.payload ){
                state.maxPoint = action.payload;
            }

            state.gameCount += 1;

        }
    }
})

export const { gameResult } = resultSlice.actions;
export default resultSlice.reducer;