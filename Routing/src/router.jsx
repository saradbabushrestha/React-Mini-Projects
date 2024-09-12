import {
  createBrowserRouter,
  Outlet,
  redirect,
  useNavigation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./Navbar";
import { Team } from "./Team";
import { TeamMember } from "./TeamMember";
import { TeamNav } from "./TeamNav";
import { NewTeamMember } from "./NewTeamMember";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <h1>404</h1> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users?_limit=2", {
            signal,
          }).then((res) => res.json());
        },
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                { signal }
              ).then((res) => {
                if (res.status === 200) return res.json();
                throw redirect("/team");
              });
            },
            element: <TeamMember />,
          },
          { path: "new", element: <NewTeamMember /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? <h1>Loading</h1> : <Outlet />}
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context="Hi from Outlet" />
    </>
  );
}
