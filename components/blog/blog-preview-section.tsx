import { getAllPosts } from "@/lib/mdx";
import { BlogPreview } from "@/components/blog-preview";
import { BlogPost } from "@/lib/mdx";

export async function BlogPreviewSection() {
  // Fetch the 3 most recent posts
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);
  
  return <BlogPreview posts={recentPosts} />;
}