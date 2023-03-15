import { createAsyncThunk } from "@reduxjs/toolkit";                  //async function perform
import axios from "axios";


export const getUsers=createAsyncThunk('users',async()=>{                     //createAsyncThunk take two args name and callback function
const response=await axios.get('https://jsonplaceholder.typicode.com/comments')
console.log("res",response)  
return response.data
});
