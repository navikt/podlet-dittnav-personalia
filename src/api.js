export const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};
