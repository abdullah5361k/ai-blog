import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-8 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted mb-6">
        <FileQuestion className="h-12 w-12 text-muted-foreground" />
      </div>

      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
        Page Not Found
      </h1>

      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link href="/">
        <Button size="lg">Back to Homepage</Button>
      </Link>
    </div>
  );
}
