import React from "react";
import { useGetAllBlogsQuery } from "../api/blog/blogApi";
import BlogCard from "../components/BlogCard/BlogCard";
const Home = () => {
  const { data, isLoading, error } = useGetAllBlogsQuery();

  return (
    <>
      <BlogCard data={data} isLoading={isLoading} error={error} />
    </>
  );
};

export default Home;
