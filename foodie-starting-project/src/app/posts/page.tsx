import { getPosts } from "@/lib/posts";
import React, { Suspense } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Post
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        </li>
      ))}
    </ul>
  );
};

const Post = ({ userId, id, title, body }: Post) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>Post ID: {id}</p>
      <p>User ID: {userId}</p>
    </div>
  );
};

const PostsPage = async () => {
  return (
    <div>
      <header>
        <h1>Posts</h1>
        <p>Explore the latest posts!</p>
      </header>
      <main>
        <Suspense fallback={<p>Loading posts...</p>}>
          <Posts />
        </Suspense>
      </main>
    </div>
  );
};

export default PostsPage;
