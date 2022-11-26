import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
    },
    reducers: {
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//Selector
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;