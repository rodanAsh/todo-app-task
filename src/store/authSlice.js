// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     token:null
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login(state,{payload}) {
//             return {...state,token:payload}
//         },
//         logout(state) {
//             return {...state,token:null}
//         }
//     }
// })

// export const {login,logout} = authSlice.actions;
// export default authSlice.reducer;

// src/features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
