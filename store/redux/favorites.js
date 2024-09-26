
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name:"Favorites",
    initialState:{
        ids : [],
    },
    reducers:{
        addFavorite:(state, action)=>{
            // console.log("action.payload.id", action.payload.id);
            state.ids.push(action.payload.id);
        },
        removeFavorite:(state, action)=>{
            state.ids = state.ids.filter(id => id !== action.payload.id); // Filter out the id
        }
    }
})
export const addfavorite = favoritesSlice.actions.addFavorite;
export const removefavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer