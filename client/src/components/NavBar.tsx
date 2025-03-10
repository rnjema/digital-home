import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/">
          <a className="mr-6 flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.jpg" alt="Ramsey Njema" />
            </Avatar>
            <span className="font-bold">Ramsey Njema</span>
          </a>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </a>
            <a href="#education" className="text-sm font-medium transition-colors hover:text-primary">
              Education
            </a>
            <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </a>
            {/* <a href="#research" className="text-sm font-medium transition-colors hover:text-primary">
              Research
            </a> */}
            <a href="#community" className="text-sm font-medium transition-colors hover:text-primary">
              Community Engagement & Interests
            </a>
            {/* <a href="#blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </a> */}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}