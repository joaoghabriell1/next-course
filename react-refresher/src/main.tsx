import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import { createRoot } from "react-dom/client";
import NewPost, { action as addPostAction } from "./routes/NewPost.tsx";
import { StrictMode } from "react";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        loader: postsLoader,
        element: <Posts />,
        children: [
          { path: ":id", element: <NewPost /> },
          { path: "/create-post", element: <NewPost />, action: addPostAction },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
