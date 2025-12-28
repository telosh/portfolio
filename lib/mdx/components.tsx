import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents: MDXComponents = {
  img: ({ src, alt, ...props }: any) => {
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={600}
          className="rounded-lg"
          {...props}
        />
      );
    },
  a: ({ href, children, ...props }: any) => {
      if (!href) return <a {...props}>{children}</a>;
      if (href.startsWith('/')) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
  h1: ({ children, ...props }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4" {...props}>
        {children}
      </h1>
    ),
  h2: ({ children, ...props }: any) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3" {...props}>
        {children}
      </h2>
    ),
  h3: ({ children, ...props }: any) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2" {...props}>
        {children}
      </h3>
    ),
  p: ({ children, ...props }: any) => (
      <p className="mb-4 leading-7" {...props}>
        {children}
      </p>
    ),
  ul: ({ children, ...props }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
  ol: ({ children, ...props }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
  code: ({ children, ...props }: any) => (
      <code
        className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    ),
  pre: ({ children, ...props }: any) => (
      <pre
        className="bg-muted p-4 rounded-lg overflow-x-auto mb-4"
        {...props}
      >
        {children}
      </pre>
    ),
  blockquote: ({ children, ...props }: any) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic my-4"
        {...props}
      >
        {children}
      </blockquote>
    ),
};
