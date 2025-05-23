import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-xl">Teche</h3>
          <p className="text-muted-foreground">
            Exploring thought-provoking ideas at the intersection of technology,
            design, and culture.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/category/technology"
                className="text-muted-foreground hover:text-primary transition"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                href="/category/design"
                className="text-muted-foreground hover:text-primary transition"
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                href="/category/culture"
                className="text-muted-foreground hover:text-primary transition"
              >
                Culture
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Subscribe</h4>
          <p className="text-muted-foreground">
            Stay updated with our latest articles and news.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Perspective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
