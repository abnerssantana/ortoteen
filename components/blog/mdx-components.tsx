import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-12 mb-4 text-4xl font-bold tracking-tight text-navy-blue",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 mb-4 text-3xl font-bold tracking-tight text-navy-blue",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 mb-4 text-2xl font-bold tracking-tight text-navy-blue",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-6 mb-3 text-xl font-bold tracking-tight text-navy-blue",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 text-gray-700 mb-4", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("my-6 ml-6 list-disc", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("my-6 ml-6 list-decimal", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn("mt-2 text-gray-700", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn("mt-6 border-l-4 border-pink-500 pl-6 italic text-gray-800", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border my-6 mx-auto", className)}
      alt={alt}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium text-pink-500 underline underline-offset-4", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn("my-6 overflow-x-auto rounded-lg bg-gray-900 p-4", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn("relative rounded bg-gray-100 px-1 py-0.5 font-mono text-sm", className)}
      {...props}
    />
  ),
  CalloutBox: ({ 
    title, 
    children, 
    type = "default" 
  }: { 
    title: string; 
    children: React.ReactNode; 
    type?: "default" | "warning" | "info" | "success" 
  }) => {
    const styles = {
      default: "bg-gray-100 border-gray-300",
      info: "bg-blue-50 border-blue-300",
      warning: "bg-yellow-50 border-yellow-300",
      success: "bg-green-50 border-green-300"
    };
    
    return (
      <div className={`p-4 my-6 rounded-md border-l-4 ${styles[type]}`}>
        {title && <p className="font-bold mb-2">{title}</p>}
        <div>{children}</div>
      </div>
    );
  },
  ImageCaption: ({
    src,
    alt,
    caption,
    width = 600,
    height = 400
  }: {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
  }) => (
    <figure className="my-8">
      <div className="overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
};