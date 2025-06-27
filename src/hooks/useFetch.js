import React, { useEffect, useState } from "react";

const useFetch = (url = "") => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (url) => {
      const response = await fetch(url);
      if (!url) return;
      try {
        setLoading(true);
        setError(null);
        const result = await response.json();
        setPosts(result.posts);
      } catch (error) {
        if (error.name !== "AbortError")
          setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData(url);
    return () => controller.abort();
  }, [url]);

  return { posts, loading, error };
};

export default useFetch;
