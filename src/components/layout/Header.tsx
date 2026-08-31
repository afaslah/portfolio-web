import { TabNav } from "../ui/TabNav";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-2 sm:px-4">
        <TabNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
