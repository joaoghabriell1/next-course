import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name="content" id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="username">Your name</label>
          <input name="name" type="text" id="name" required />
        </p>
        <div className={classes.actions}>
          <Link to="/" className={classes["cancel-button"]} type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const postData = {
    ...Object.fromEntries(formData),
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "Postslication/json",
      },
      body: JSON.stringify(postData),
    });
  } catch (error: Error | unknown) {
    console.log("Erro ao adicionar novo post, tente novamente!");
  }

  return redirect("/");
};

export default NewPost;
