"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { mockItems } from "../lib/mock-data";
import { MediaItem } from "../lib/types";

function MasonryCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  const aspect = (item.height / item.width) * 100;
  return (
    <button onClick={onClick} style={{ width: "100%", border: "none", background: "transparent", padding: 0, textAlign: "left", cursor: "pointer" }}>
      <div style={{ position: "relative", width: "100%", paddingTop: `${aspect}%`, borderRadius: 12, overflow: "hidden" }}>
        <Image src={item.thumbnailUrl} alt="inspiration" fill sizes="(max-width: 900px) 50vw, 20vw" style={{ objectFit: "cover" }} />
      </div>
    </button>
  );
}

export default function Canvas() {
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const cols = useMemo(() => [[], [], [], []] as MediaItem[][], []);

  mockItems.forEach((item, idx) => cols[idx % cols.length].push(item));

  return (
    <main style={{ padding: 20 }}>
      <div className="glass" style={{ position: "sticky", top: 12, zIndex: 20, borderRadius: 16, padding: 12, marginBottom: 16 }}>
        <strong>Inspo Canvas MVP</strong> – filter/search/pan placeholder
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 14 }}>
        {cols.map((column, i) => (
          <div key={i} style={{ display: "grid", gap: 14 }}>
            {column.map((item) => (
              <MasonryCard key={item.id} item={item} onClick={() => setSelected(item)} />
            ))}
          </div>
        ))}
      </div>

      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.32)", display: "grid", placeItems: "center", padding: 24 }}>
          <div className="glass" onClick={(e) => e.stopPropagation()} style={{ width: "min(880px, 95vw)", borderRadius: 20, padding: 16 }}>
            <p style={{ marginTop: 0 }}>Source: {selected.source}</p>
            <p>Vibe prompt: {selected.vibePrompt}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {selected.tags.map((tag) => (
                <span key={tag} className="glass" style={{ borderRadius: 999, padding: "4px 10px" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
