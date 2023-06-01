import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("@posts/getPosts", async (page) => {
  let { data } = await axios.get(
    "https://rickandmortyapi.com/api/character?page=" + page
  );
  return data;
});
