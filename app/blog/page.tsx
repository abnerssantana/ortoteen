import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { CategoryFilter } from "@/components/blog/category-filter";
import { BLOG_CONFIG } from "@/lib/blog-config";
import { Pagination } from "@/components/blog/pagination";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Ortoteen",
  description: "Artigos e dicas sobre ortodontia e saúde bucal",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0]; // Get the first post as featured
  const regularPosts = posts.slice(1); // Get the rest of the posts
  
  // Calculate pagination
  const postsPerPage = BLOG_CONFIG.postsPerPage;
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  
  return (
    <div className="py-24 bg-light-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5 pattern-dots text-navy-blue"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium border rounded-full border-pink-300 text-pink-500 mb-4 bg-white shadow-sm">
            <Sparkles size={14} className="mr-2 text-pink-500" />
            <span>BLOG</span>
          </div>
          
          <h1 className="text-4xl font-bold text-navy-blue mb-4">
            Conhecimento para seu bem-estar bucal
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dicas, informações e novidades sobre ortodontia e saúde bucal para 
            manter seu sorriso sempre saudável e bonito.
          </p>
        </div>
        
        {/* Featured post */}
        {featuredPost && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100 hover:border-pink-300 transition-all">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.frontMatter.coverImage || "/placeholder.jpg"}
                    alt={featuredPost.frontMatter.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <span>{new Date(featuredPost.frontMatter.date).toLocaleDateString('pt-BR')}</span>
                    <span>•</span>
                    <span>{featuredPost.readingTime.text}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4 group-hover:text-pink-500 transition-colors">
                    {featuredPost.frontMatter.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredPost.frontMatter.excerpt}
                  </p>
                  
                  <div className="flex items-center text-pink-500 font-medium">
                    Ler artigo completo 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
        
        {/* Category filters */}
        <CategoryFilter />
        
        {/* Regular posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.slice(0, postsPerPage).map((post, index) => (
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
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={1}
            baseUrl="/blog/pagina"
          />
        )}
      </div>
    </div>
  );
}