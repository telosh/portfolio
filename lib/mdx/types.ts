export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  locale: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}
