import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import { PostProps } from "../components/Post";

function Posts() {
  return (
    <main className="container">
      <Outlet />
      <PostsList />
    </main>
  );
}

export default Posts;

export const loader = async () => {
  const res: Response = await fetch("http://localhost:3001/posts");
  const data: PostProps[] = await res.json();
  return data;
};
