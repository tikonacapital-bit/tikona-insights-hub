import { fetchStrapi } from "@/lib/strapi";
import type { LegalDocument, StrapiResponse } from "@/types/legalDocument";

export async function fetchLegalDocument(slug: string): Promise<LegalDocument | null> {
  try {
    const response = await fetchStrapi<StrapiResponse<LegalDocument>>(
      `/legal-documents?filters[slug][$eq]=${slug}&populate=*`
    );
    if (response.data && response.data.length > 0) {
      return response.data[0];
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch legal document: ${slug}`, error);
    return null;
  }
}
