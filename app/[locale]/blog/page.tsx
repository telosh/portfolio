import { getTranslations } from 'next-intl/server';
import { getAllPosts } from '@/lib/mdx/get-posts';
import { Link } from '@/lib/i18n/routing';
import { BlogSearch } from '@/components/features/blog/blog-search';

export async function generateMetadata() {
  const t = await getTranslations('blog');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog');
  const posts = await getAllPosts(locale);

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <div className="mt-8">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">{t('noPosts')}</p>
        ) : (
          <>
            <BlogSearch posts={posts} locale={locale} />
            <div id="blog-list" className="mt-8 space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-lg border p-6 transition-colors hover:bg-accent"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold mb-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-muted rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
