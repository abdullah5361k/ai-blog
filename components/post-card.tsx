import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Post } from "@/lib/static-data";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
  className?: string;
}

function PostCard({ post, className }: PostCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md",
        className
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={post.title}
      />

      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
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
        </div>

        <h3 className="font-serif text-xl font-bold leading-tight mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t">
          <div className="flex items-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full object-cover mr-2"
            />
            <span className="text-sm">{post.author.name}</span>
          </div>

          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {post.readingTime}
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
