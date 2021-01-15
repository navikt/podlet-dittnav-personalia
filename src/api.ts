export const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

export interface NavnResponse {
  navn: string;
}

export interface IdentResponse {
  ident: string;
}
