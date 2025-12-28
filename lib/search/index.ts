import Fuse from 'fuse.js';
import { BlogPost } from '../mdx/types';

export interface SearchResult extends BlogPost {
  score?: number;
}

export function createSearchIndex(posts: BlogPost[]) {
  return new Fuse(posts, {
    keys: ['title', 'description', 'tags'],
    threshold: 0.3,
    includeScore: true,
  });
}

export function searchPosts(
  index: Fuse<BlogPost>,
  query: string
): SearchResult[] {
  if (!query.trim()) {
    return index.getIndex().docs as BlogPost[];
  }

  const results = index.search(query);
  return results.map((result) => ({
    ...result.item,
    score: result.score,
  }));
}
