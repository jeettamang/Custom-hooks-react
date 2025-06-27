import { useState } from "react";
import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";

const FetchingData = () => {
  const [search, setSearch] = useState("");
  const searchTerm = useDebounce(search, 1000);
  const { posts, loading, error } = useFetch(
    `https://dummyjson.com/posts/search?q=${searchTerm}`
  );

  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} />
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <h1>Post Lists</h1>
      {posts.length > 0 ? (
        <ol className="list-decimal pl-4 px-4">
          {posts.map((p, i) => (
            <li key={i}>
              <strong>{p.title}</strong>
            </li>
          ))}
        </ol>
      ) : (
        <p>No post found</p>
      )}
    </>
  );
};

export default FetchingData;
