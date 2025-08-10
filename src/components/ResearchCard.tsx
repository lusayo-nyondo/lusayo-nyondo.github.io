import React from "react";
import { ResearchItem } from "@/types";

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <div className="border rounded-md p-4 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.authors && item.authors.length > 0 && (
            <p className="text-sm opacity-80">{item.authors.join(", ")}</p>
          )}
          {(item.venue || item.year || item.status) && (
            <p className="text-xs opacity-70">
              {[item.venue, item.year, item.status].filter(Boolean).join(" • ")}
            </p>
          )}
        </div>
      </div>
      {item.abstract && <p className="text-sm opacity-90">{item.abstract}</p>}
      <div className="flex items-center gap-4 text-sm">
        {item.url && (
          <a className="underline" href={item.url} target="_blank" rel="noreferrer">
            View Page
          </a>
        )}
        {item.pdfUrl && (
          <a className="underline" href={item.pdfUrl} target="_blank" rel="noreferrer">
            PDF
          </a>
        )}
        {item.doi && (
          <span className="opacity-70">DOI: {item.doi}</span>
        )}
      </div>
    </div>
  );
}
