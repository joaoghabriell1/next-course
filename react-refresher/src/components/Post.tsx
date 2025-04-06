import styles from "./Post.module.css";

export interface PostProps {
  username: string;
  content: string;
  timestamp: string;
}

const Post = ({ username, content, timestamp }: PostProps) => {
  return (
    <div className={styles.post}>
      <div>
        <span className={styles.author}>{username}</span>
        <span>{timestamp}</span>
      </div>
      <p className={styles.text}>{content}</p>
    </div>
  );
};

export default Post;
