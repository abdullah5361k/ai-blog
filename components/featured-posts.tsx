import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Post } from "@/lib/static-data";
import { Badge } from "@/components/ui/badge";

interface FeaturedPostProps {
  post: Post;
  priority?: boolean;
  className?: string;
}

function FeaturedPost({
  post,
  priority = false,
  className,
}: FeaturedPostProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all hover:shadow-xl",
        className
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={post.title}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
        <div className="relative h-60 md:h-full w-full overflow-hidden rounded-tl-xl rounded-bl-xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority={priority}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="flex flex-col p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Badge variant="secondary" className="capitalize">
              {post.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarDays className="mr-1 h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {post.readingTime}
            </div>
          </div>

          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
            {post.title}
          </h2>

          <p className="text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full object-cover mr-3"
            />
            <span className="font-medium">{post.author.name}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedPost;
