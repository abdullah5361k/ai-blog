import { getRecentPosts } from "@/lib/static-data";
import PostCard from "./post-card";

const RecentArticles = () => {
  const recentPosts = getRecentPosts().slice(0, 6);
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">
          Recent Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default RecentArticles;
