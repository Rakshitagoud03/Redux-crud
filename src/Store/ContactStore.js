import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from '../Reducers/ContactReducers'

// config store
const ContactStore = configureStore({
    reducer: ContactReducer,
    devTools: true
})

export default ContactStore