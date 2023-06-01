import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsActions";

const initialState = {
  posts: [],
  page: 1,
  totalPages: 10,
};

export const postsSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload.results;
      state.totalPages = action.payload.info.pages;
    });
  },
});

export const postsReducer = postsSlice.reducer;

export const { setPage } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;
