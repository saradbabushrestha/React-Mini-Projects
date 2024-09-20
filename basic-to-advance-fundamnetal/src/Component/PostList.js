import { useEffect, useState } from "react";

export const PostList = () => {
  const [postlist, setPostlist] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((Response) => Response.json())
      .then((data) => setPostlist(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {postlist.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};
