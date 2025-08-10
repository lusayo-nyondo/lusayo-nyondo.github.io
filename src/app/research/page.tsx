import research from "@/../content/research.json";
import { ResearchCard } from "@/components/ResearchCard";
import { ResearchItem } from "@/types";

export const dynamic = "force-static";

export default function ResearchPage() {
  const items = research as unknown as ResearchItem[];
  return (
    <div className="py-8 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Research</h1>
      {items.length === 0 && (
        <p className="text-sm opacity-70">Add items to <code>content/research.json</code>.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <ResearchCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
