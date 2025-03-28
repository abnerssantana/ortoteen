import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, compileMDXContent } from "@/lib/mdx";
import { mdxComponents } from "@/components/blog/mdx-components";
import { PostHeader } from "@/components/blog/post-header";
import { ShareButtons } from "@/components/blog/share-buttons";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }
  
  return {
    title: `${post.frontMatter.title} - Ortoteen Blog`,
    description: post.frontMatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return notFound();
  }
  
  const content = await compileMDXContent(post.content);
  
  return (
    <div className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8">
          <Button 
            variant="outline" 
            size="sm"
            className="group"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para o blog
            </Link>
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <PostHeader post={post} />
          
          <article className="prose prose-lg max-w-none">
            {content}
          </article>
          
          <ShareButtons 
            title={post.frontMatter.title} 
            slug={post.slug} 
          />
        </div>
      </div>
    </div>
  );
}