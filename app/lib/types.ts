export type MediaType = "image" | "video" | "3d" | "gif";

export type MediaItem = {
  id: string;
  type: MediaType;
  url: string;
  thumbnailUrl: string;
  width: number;
  height: number;
  source: "curated" | "unsplash" | "pexels";
  vibePrompt: string;
  tags: string[];
  dominantColors: string[];
};
