import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface PostHeaderProps {
  post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  const formattedDate = formatDate(post.frontMatter.date);
  
  return (
    <div className="mb-8">
      <Badge className="mb-4 bg-pink-100 text-pink-500 hover:bg-pink-200">
        {post.frontMatter.category}
      </Badge>
      
      <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
        {post.frontMatter.title}
      </h1>
      
      <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
        <div className="flex items-center gap-2">
          <Image
            src={post.frontMatter.author.avatar || "/placeholder-user.jpg"}
            alt={post.frontMatter.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{post.frontMatter.author.name}</span>
        </div>
        
        <div className="flex items-center">
          <Calendar size={16} className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center">
          <Clock size={16} className="mr-2" />
          <span>{post.readingTime.text}</span>
        </div>
      </div>
      
      <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-xl">
        <Image
          src={post.frontMatter.coverImage || "/placeholder.jpg"}
          alt={post.frontMatter.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 75vw"
          priority
        />
      </div>
    </div>
  );
}
