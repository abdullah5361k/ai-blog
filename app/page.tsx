// import { getFeaturedPosts, getRecentPosts } from '@/lib/data'
// import FeaturedPost from '@/components/FeaturedPost'
// import PostCard from '@/components/PostCard'
// import Newsletter from '@/components/Newsletter'
// import CategoryList from '@/components/CategoryList'

import CategoryList from "@/components/category-list";
import HomePageWelcomeSession from "@/components/home-page-welcome-session";
import SearchBar from "@/components/search";

export default function HomePage() {
  // const featuredPosts = getFeaturedPosts();
  // const recentPosts = getRecentPosts().slice(0, 6);

  return (
    <div className="container py-8 md:py-12">
      <section>
        <HomePageWelcomeSession />
      </section>
      <section className="mb-8">
        <SearchBar />
      </section>
      <section>
        <CategoryList className="mb-8" />
      </section>
    </div>
  );
}
