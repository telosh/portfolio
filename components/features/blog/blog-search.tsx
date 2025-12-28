'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/mdx/types';
import { createSearchIndex, searchPosts } from '@/lib/search';
import { Link } from '@/lib/i18n/routing';

interface BlogSearchProps {
  posts: BlogPost[];
  locale: string;
}

export function BlogSearch({ posts, locale }: BlogSearchProps) {
  const [query, setQuery] = useState('');

  const index = useMemo(() => createSearchIndex(posts), [posts]);
  const results = useMemo(
    () => searchPosts(index, query),
    [index, query]
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="検索..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      {query && (
        <div className="space-y-4">
          {results.length > 0 ? (
            results.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-lg border p-6 transition-colors hover:bg-accent"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.description}</p>
              </Link>
            ))
          ) : (
            <p className="text-muted-foreground">検索結果が見つかりませんでした</p>
          )}
        </div>
      )}
    </div>
  );
}
