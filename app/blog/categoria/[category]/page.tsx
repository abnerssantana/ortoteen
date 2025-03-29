import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/mdx";
import { BLOG_CONFIG } from "@/lib/blog-config";
import { PostCard } from "@/components/blog/post-card";
import { CategoryFilter } from "@/components/blog/category-filter";
import { Rss } from "lucide-react";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata(
  { params }: CategoryPageProps
): Promise<Metadata> {
  const categorySlug = params.category;
  const categoryObj = BLOG_CONFIG.categoriesList.find(c => c.slug === categorySlug);
  
  if (!categoryObj) {
    return {
      title: "Categoria não encontrada",
    };
  }
  
  return {
    title: `${categoryObj.name} - Ortoteen Blog`,
    description: `Artigos sobre ${categoryObj.name.toLowerCase()} e saúde bucal`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categorySlug = params.category;
  const categoryObj = BLOG_CONFIG.categoriesList.find(c => c.slug === categorySlug);
  
  if (!categoryObj) {
    return notFound();
  }
  
  const posts = await getPostsByCategory(categorySlug);
  
  return (
    <div className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Link href="/blog" className="inline-block">
            <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-purple text-white mb-4">
              <Rss size={14} className="mr-2 text-white-500" />
              <span>Blog</span>
            </div>
          </Link>
          
          <h1 className="text-4xl font-bold text-navy-blue mb-4">
            {categoryObj.name}
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artigos e dicas sobre {categoryObj.name.toLowerCase()} para manter seu sorriso sempre saudável e bonito.
          </p>
        </div>
        
        {/* Category filters */}
        <CategoryFilter />
        
        {/* Posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.frontMatter.title}
              excerpt={post.frontMatter.excerpt}
              date={post.frontMatter.date}
              category={post.frontMatter.category}
              readingTime={post.readingTime.text}
              coverImage={post.frontMatter.coverImage}
              delay={0.1 + (index * 0.05)}
            />
          ))}
        </div>
        
        {/* Display message if no posts are found */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}