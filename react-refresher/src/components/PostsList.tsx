import styles from "./PostList.module.css";
import Post, { PostProps } from "./Post";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const postList: PostProps[] = useLoaderData();

  return (
    <>
      {postList && postList.length === 0 && (
        <h2 style={{ textAlign: "center", fontStyle: "italic", width: "100%" }}>
          No postList available
        </h2>
      )}
      <ul className={styles.posts}>
        {postList &&
          postList.length > 0 &&
          postList.map((post, index) => (
            <li key={index}>
              <Post
                username={post.username}
                content={post.content}
                timestamp={post.timestamp}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default PostsList;
