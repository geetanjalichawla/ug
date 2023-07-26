import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './Reducers/authReducer';


export const server = "https://webient.in/api/auth";

const store = configureStore({
    reducer :{
auth : authReducer,


    },
})
export default store;