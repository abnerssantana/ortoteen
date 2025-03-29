import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { CategoryFilter } from "@/components/blog/category-filter";
import { BLOG_CONFIG } from "@/lib/blog-config";
import { Pagination } from "@/components/blog/pagination";
import { Rss } from "lucide-react";
import Link from "next/link";

interface BlogPageProps {
  params: {
    page: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const page = parseInt(params.page);
  
  return {
    title: `Blog - Página ${page} - Ortoteen`,
    description: "Artigos e dicas sobre ortodontia e saúde bucal",
  };
}

export default async function BlogPaginatedPage({ params }: BlogPageProps) {
  const pageNumber = parseInt(params.page);
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }
  
  const posts = await getAllPosts();
  
  // Skip the first post (featured) for all pages
  const regularPosts = posts.slice(1);
  
  const postsPerPage = BLOG_CONFIG.postsPerPage;
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  
  if (pageNumber > totalPages && totalPages > 0) {
    return notFound();
  }
  
  // Calculate page slice
  const startIndex = (pageNumber - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, endIndex);
  
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
              <Rss size={14} className="mr-2 text-white" />
              <span>Blog</span>
            </div>
          </Link>
          
          <h1 className="text-4xl font-bold text-navy-blue mb-4">
            Conhecimento para seu bem-estar bucal
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dicas, informações e novidades sobre ortodontia e saúde bucal - Página {pageNumber}
          </p>
        </div>
        
        {/* Category filters */}
        <CategoryFilter />
        
        {/* Posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post, index) => (
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
        {paginatedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum artigo encontrado nesta página.</p>
          </div>
        )}
        
        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={pageNumber}
          baseUrl="/blog/pagina"
        />
      </div>
    </div>
  );
}
