import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

// Define the blog post type
export type BlogPost = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    category: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      avatar: string;
    };
  };
  content: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
};

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Get all post slugs
export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

// Get post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const readingTimeResult = readingTime(content);
    
    return {
      slug: slug,
      frontMatter: {
        title: data.title || '',
        date: data.date || '',
        category: data.category || '',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        author: data.author || { name: 'Dra. Taciana Palamoni', avatar: '/placeholder-user.jpg' }
      },
      content,
      readingTime: readingTimeResult
    };
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
}

// Get all posts with metadata
export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getPostSlugs();
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug.replace(/\.mdx$/, ''));
      return post;
    })
  );
  
  // Filter out null posts and sort by date
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  
  return allPosts.filter(post => {
    return post.frontMatter.category.toLowerCase() === category.toLowerCase();
  });
}

// Compile MDX content with components
export async function compileMDXContent(content: string) {
  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight]
      }
    }
  });
  
  return compiledContent;
}