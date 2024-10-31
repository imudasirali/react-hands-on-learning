import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { PostPageRoute } from "./pages/PostsPage";
import { UsersPageRoute } from "./pages/UsersPage";
import { TodosPageRoute } from "./pages/TodosPage";
import { PageLayout } from "./layouts/Pagelayout";
import { SinglePostRoute } from "./pages/SinglePostPage";
import { SingleUserRoute } from "./pages/SingleUserPage";
import { ErrorPage } from "./pages/ErrorPage";
import { NewPostRoute } from "./pages/NewPost";
import { EditPostRoute } from "./pages/EditPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Outlet />
      </PageLayout>
    ),
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "/posts",
            children: [
              {
                index: true,
                ...PostPageRoute,
              },
              {
                path: ":postId",
                ...SinglePostRoute,
              },
              {
                path: "new",
                ...NewPostRoute,
              },
              {
                path: ":postId/edit",
                ...EditPostRoute,
              },
            ],
          },
          {
            path: "/users",
            children: [
              {
                index: true,
                ...UsersPageRoute,
              },
              {
                path: ":userId",
                ...SingleUserRoute,
              },
            ],
          },
          {
            path: "/todos",
            children: [
              {
                index: true,
                ...TodosPageRoute,
              },
            ],
          },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);
