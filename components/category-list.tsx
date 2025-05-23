import Link from "next/link";
import { cn } from "@/lib/utils";
import { getAllCategories } from "@/lib/static-data";
import { Badge } from "@/components/ui/badge";

interface CategoryListProps {
  currentCategory?: string;
  className?: string;
}

function CategoryList({ currentCategory, className }: CategoryListProps) {
  const categories = getAllCategories();

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Link href="/">
        <Badge
          variant={!currentCategory ? "default" : "secondary"}
          className="capitalize cursor-pointer"
        >
          All
        </Badge>
      </Link>

      {categories.map((category) => (
        <Link key={category} href={`/category/${category}`}>
          <Badge
            variant={currentCategory === category ? "default" : "secondary"}
            className="capitalize cursor-pointer"
          >
            {category}
          </Badge>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
