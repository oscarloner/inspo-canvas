import { MediaItem } from "./types";

export const mockItems: MediaItem[] = Array.from({ length: 40 }, (_, i) => {
  const w = 400 + ((i * 83) % 300);
  const h = 500 + ((i * 131) % 400);
  return {
    id: `item-${i + 1}`,
    type: "image",
    url: `https://images.unsplash.com/photo-150${(i + 10).toString().padStart(4, "0")}?auto=format&fit=crop&w=${w}&h=${h}`,
    thumbnailUrl: `https://images.unsplash.com/photo-150${(i + 10).toString().padStart(4, "0")}?auto=format&fit=crop&w=500&h=500`,
    width: w,
    height: h,
    source: i % 2 === 0 ? "unsplash" : "curated",
    vibePrompt: "Warm editorial minimal moodboard, soft shadows, tactile materials.",
    tags: ["minimal", "editorial", i % 3 === 0 ? "warm" : "neutral"],
    dominantColors: ["#E5D7C8", "#D6C4B1", "#8A7F72"]
  };
});
