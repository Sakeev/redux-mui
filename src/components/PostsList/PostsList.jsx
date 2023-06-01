import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postsActions";
import { selectAllPosts } from "../../features/posts/postsSlice";
import PaginationList from "../Pagination/PaginationList";
import PostCard from "../PostCard/PostCard";

const PostsList = () => {
  const { posts } = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: " wrap",
          paddingTop: "6%",
          paddingBottom: "5%",
        }}
      >
        {posts.map((item) => (
          <PostCard key={item.id} card={item} />
        ))}
      </Box>
      <PaginationList />
    </Box>
  );
};

export default PostsList;
