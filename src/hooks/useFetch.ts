import { useState, useEffect } from 'react';

export interface Project { name: string; url: string }
export interface Profile { name: string; skills: string[]; experience: string[]; projects: Project[] }

const useFetch = <T,>(url: string): {
  data: T | null;
  loading: boolean;
  error: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json() as Promise<T>;
      })
      .then((json) => setData(json))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;