import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    order: undefined
};

const orderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setOrders: (state, action) => {
            return {
                ...state,
                orders: action.payload
            }
        },
        setOrder: (state, action) => {
            return {
                ...state,
                order: action.payload
            }
        }
    }
});

export const {setOrders, setOrder} = orderSlice.actions;
export default orderSlice.reducer;