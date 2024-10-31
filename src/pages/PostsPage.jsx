import { useLoaderData } from "react-router-dom";
import { Post } from "../components/Post";

function PostsPage() {
  const posts = useLoaderData();
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </>
  );
}

const loader = function loader({ request: { signal } }) {
  return fetch("http://127.0.0.1:3000/posts", {
    signal,
  });
};

export const PostPageRoute = {
  loader,
  element: <PostsPage />,
};
