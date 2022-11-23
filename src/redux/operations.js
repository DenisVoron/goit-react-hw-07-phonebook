import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://637d094a16c1b892ebc62efc.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (name, phone, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, phone });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);



/*const fetchUsers = () => {
    return axios.get("https://637cfb729c2635df8f7ed55b.mockapi.io/contacts");
    //const users = await response.json();
    //return response;
};

fetchUsers().then(users => console.log(users));*/