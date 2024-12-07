import Link from "next/link";
import ThemeToggle from "./themeToggle";

export default function Component() {
  return (
    <header className="bg-gray-100 dark:bg-black border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white hover:text-primary transition-colors">
          Alexanderiscoding
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
