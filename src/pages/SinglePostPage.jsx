import { Link, useLoaderData } from "react-router-dom";
function SinglePostPage() {
  const { singlePost, comments, user } = useLoaderData();
  return (
    <>
      <h1 className="page-title">{singlePost.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}> {user.name}</Link>
      </span>
      <div>{singlePost.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal }, params }) {
  const singlePost = await fetch(
    `http://127.0.0.1:3000/posts/${params.postId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  const comments = fetch(
    `http://127.0.0.1:3000/posts/${params.postId}/comments`,
    {
      signal,
    }
  ).then((res) => res.json());

  const user = await fetch(`http://127.0.0.1:3000/users/${singlePost.userId}`, {
    signal,
  }).then((res) => res.json());

  return { singlePost, comments: await comments, user: await user };
}

export const SinglePostRoute = {
  loader,
  element: <SinglePostPage />,
};