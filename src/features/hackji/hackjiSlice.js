import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    user: null
}

export const hackjiSlice = createSlice({
    name: "hackji",
    initialState,
    reducers:{
        setUser(state,action){
            state.user=action.payload
        }
    }
})

export const {setUser} = hackjiSlice.actions;

export default hackjiSlice.reducer