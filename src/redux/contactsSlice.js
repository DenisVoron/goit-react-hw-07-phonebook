import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts } from "./operations";

/*const contactsInitialState = [
    {
        id: nanoid(),
        name: 'Boby Rante',
        number: '213-21-32',
    },
    {
        id: nanoid(),
        name: 'Rut Mango',
        number: '213-27-68',
    },
    {
        id: nanoid(),
        name: 'Tony Hytro',
        number: '687-86-86',
    }
];*/

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: "",
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

        [addContacts.pending](state) {
            state.isLoading = true;
        },
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

    },

    /*reducers: {
        addContacts(state, action) {
            state.contact.push(action.payload);
        },
        deleteContacts(state, action) {
            const index = state.contact.findIndex(item => item.id === action.payload);
            state.contact.splice(index, 1);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }*/
});

//export const { addContacts, deleteContacts, changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//Selector
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;


/**const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contact: contactsInitialState,
        filter: '',
    },

    reducers: {
        addContacts(state, action) {
            state.contact.push(action.payload);
        },
        deleteContacts(state, action) {
            const index = state.contact.findIndex(item => item.id === action.payload);
            state.contact.splice(index, 1);
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
}); */