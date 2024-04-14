import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
    token: string;
    isAuthenticated: boolean;
}

interface AuthState {
    auth: Auth;
}

const initialState: AuthState = {
    auth: {
        token: "",
        isAuthenticated: false,
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.auth.isAuthenticated = true;
            state.auth.token = action.payload;
        },
        logout: (state) => {
            state.auth.isAuthenticated = false;
            state.auth.token = "";
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
