import CategoryList from "@/components/category-list";
import FeaturedPost from "@/components/featured-posts";
import HomePageWelcomeSession from "@/components/home-page-welcome-session";
import RecentArticles from "@/components/recent-articles";
import SearchBar from "@/components/search";
import { getFeaturedPosts } from "@/lib/static-data";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="container py-8 md:py-12">
      <section>
        <HomePageWelcomeSession />
      </section>
      <section className="mb-8">
        <SearchBar />
      </section>
      <section className="mb-8">
        <CategoryList className="mb-8" />
        <div className="grid gap-6">
          {featuredPosts.map((post, index) => (
            <FeaturedPost key={post.id} post={post} priority={index === 0} />
          ))}
        </div>
      </section>
      <section className="mb-12">
        <RecentArticles />
      </section>
    </div>
  );
}
