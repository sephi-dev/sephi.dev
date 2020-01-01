interface Meta {
  pagination: {
    page: number;
    limit: string;
    pages: number;
    total: number;
    next: null | number;
    prev: null | number;
  };
}

export interface Post {
  title: string;
  html: string;
  id: string;
  uuid: string;
  featured: boolean;
  featured_image: string | null;
  excerpt: string;
  slug: string;
  updated_at: string;
  published_at: string;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  meta: Meta;
}
