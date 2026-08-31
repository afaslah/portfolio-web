import { useEffect, useState } from "react";

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "hero", label: "hero.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "experience", label: "experience.tsx" },
  { id: "contact", label: "contact.tsx" },
];

export function TabNav() {
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveTab(visible.target.id);
      },
      { rootMargin: "-20% 0px -20% 0px" },
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Primary navigation" className="min-w-0 overflow-x-auto">
      <ul className="flex min-w-max items-center">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              className={`block border-x border-transparent px-3 py-4 font-mono text-xs transition-colors hover:border-border hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent sm:px-4 ${activeTab === tab.id ? "border-b-2 border-b-accent text-accent" : "text-muted"}`}
              href={`#${tab.id}`}
              aria-current={activeTab === tab.id ? "page" : undefined}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
