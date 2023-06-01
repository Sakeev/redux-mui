import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postsActions";
import { selectAllPosts } from "../../features/posts/postsSlice";
import PaginationList from "../Pagination/PaginationList";
import PostCard from "../PostCard/PostCard";
import "./PostsList.css";

const PostsList = () => {
  const { posts } = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="content">
      <div className="posts-list">
        {posts.map((item) => (
          <PostCard key={item.id} card={item} />
        ))}
      </div>
      <PaginationList />
    </div>
  );
};

export default PostsList;
