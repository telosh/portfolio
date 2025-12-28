import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostWithContent } from './types';

const postsDirectory = join(process.cwd(), 'content', 'blog');

export async function getPostSlugs(locale: string): Promise<string[]> {
  const localeDir = join(postsDirectory, locale);
  try {
    const files = await readdir(localeDir);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export async function getPostBySlug(
  slug: string,
  locale: string
): Promise<BlogPostWithContent | null> {
  try {
    const fullPath = join(postsDirectory, locale, `${slug}.mdx`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      tags: data.tags || [],
      locale,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(locale: string): Promise<BlogPost[]> {
  const slugs = await getPostSlugs(locale);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug, locale);
      if (!post) return null;
      const { content: _, ...postWithoutContent } = post;
      return postWithoutContent;
    })
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
}
