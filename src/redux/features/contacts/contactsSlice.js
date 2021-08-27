import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAll = createAsyncThunk(
  "contacts/getAll",
    () =>
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contactList: [], loading: 'idle'
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
        console.log(action)
        state.contactList = action.payload
        state.loading = 'success'
    })
    builder.addCase(getAll.pending, (state, action) => {
        console.log(action)
        state.loading = 'pending'
    })
  }
});

//export const { getAll } = contactsSlice.actions;

export default contactsSlice.reducer;
