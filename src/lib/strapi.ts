const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "https://cms.tikonacapital.com";

export function getStrapiMedia(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}

export async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`);
  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export { STRAPI_URL };
