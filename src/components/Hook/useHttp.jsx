import React, { useState, useCallback } from "react";

export default function useHttp(url) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);
  const [error, setError] = useState([]);

  const sendRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  }, []);
  return { items, isLoading, error, sendRequest };
}
