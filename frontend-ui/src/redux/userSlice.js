// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoggedIn: false,
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { addUser, deleteUser, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
